"use strict";

const fs = require("fs");
/*  TODO: add two-step generation: first interfaces, second implementation from interfaces, not relying on *.json defs. 
    it will allow to write custom *ts interfaces and generate implementations
*/

let inFile = "./resources/definitions.json";//process.argv[2];
let baseName = 'definitions';
let outDir = './src/ts/gen';

let indexFile = [];

console.log("Typescript model generator v0.0.1\nAuthor: Alexander Startsev");

function mkdirp(path) {
    let cc = path.split('/'), f1 = cc.shift();
    cc.reduce((cp, c) => (cp += '/' + c, fs.existsSync(cp) || fs.mkdirSync(cp), cp), f1);
}

function rmdir(path) {
    if(fs.existsSync(path) )
        fs.statSync(path).isFile() ? fs.unlinkSync(path) : 
           (fs.readdirSync(path).forEach(p => rmdir(path + '/' + p)), fs.rmdirSync(path));
}

let defs = JSON.parse(fs.readFileSync(inFile)), nameSpaces = {}, allParents = {};

Object.keys(defs).forEach(fullName => 
    defs[fullName].fields.forEach(fld => 
        fld.kind === 'Simple' || (allParents[fld.retTypeDef] || (allParents[fld.retTypeDef] = [])).push(fullName)
    )
);

let isEnum = {}

function defineEnum(fld) {
    if(fld.enumName) {
        isEnum[fld.enumName] = true;
        let ns = fld.enumName.split('.');
        let lname = ns.pop(), e2v = fld.enumNameToValue;
        let parts = Object.keys(e2v);
        addDefinition( ns, lname, [`export enum ${lname}  { ${parts.reduce((uniq, cur) => uniq.indexOf(cur)>=0 ? uniq : uniq.concat(cur + ' = "' + e2v[cur] + '"'), []).join(", ")} } `] );
    }
}

function defineInterface(def) {
    let ret = [];
    ret.push("export interface " + def.javaName.split('.').pop() + " extends " + (def.javaExtends.length ? def.javaExtends.map(e => `Omit<${e}, "p">`).join(", ") : "IArfSet") + " {");
    def.fields.sort( (fld1, fld2) => fld1.methodName.localeCompare(fld2.methodName) ).forEach(fld => {
        if( fld.methodName.match(/^[a-zA-Z$_]/) ) {
            switch(fld.kind) {
            case 'Simple':
                defineEnum(fld);
                ret.push(`    ${fld.methodName}?: ${fld.retTypeDef}`);
                break;
            case 'Set':
                ret.push(`    readonly ${fld.methodName}?: ${fld.retTypeDef}`);
                break;
            case 'List':
                ret.push(`    readonly ${fld.methodName}?: ${fld.retTypeDef}[]`);
                break;
            case 'Map':
                defineEnum(fld);
                ret.push(`    readonly ${fld.methodName}?: {[K in ${fld.enumName}]: ${fld.retTypeDef}}&IArfSet`);
                break;
            }
        }
    })
    ret.push("    readonly p?: " + (allParents[def.javaName] && allParents[def.javaName].filter((v, i, a) => a.indexOf(v) === i).join("|") || "IArfSet") );
    ret.push("}");

    return ret;
}

function defToPackageName(defName) {
    let pckg = defName.split('.');
    pckg.pop();
    return pckg.join('.');
}

function defToImplFullname(defName) {
    return defName.split('.').pop().replace(/^I/,'') + 'Proxy';
    //return defName.replace(/\./g, '_') + 'Proxy';
}

function mapImplFullname(defName, methodName) {
    return defToImplFullname(defName) + "_" + methodName + "_Impl";
}

function addImplImport(javaName, outImports) {
    let pckg = defToPackageName(javaName);
    let imps = (outImports[pckg] || (outImports[pckg]=[]));
    let nn = defToImplFullname(javaName);
    (imps.indexOf(nn) > -1) || imps.push(nn);
}

function implementInterface(def, out, outImports) {
    /*imports on extends create cyclic dependencies that are impossible to resolve. 
      def.javaExtends.forEach(def => addImplImport(def, outImports))
      ---> unable: don't create class with no own properties - inject its ancestor (or ModelProxy) wherever it s referenced.
      let base = def.javaExtends.length === 1 ? defToImplFullname(def.javaExtends[0]) : 'ModelProxy<' + def.javaName + '>'; 
      */
    let fields = def.fields.concat();
    (function includeInheritedFields(def){
        def.javaExtends.filter(def => !!defs[def]).forEach(def => {
            defs[def].fields.forEach(fld => fields.some(f => f.methodName === fld.methodName) || fields.push(fld))
            includeInheritedFields(defs[def]);
        })
    })(def);
    fields.forEach(fld => {
        if(fld.kind == 'Set' || fld.kind == 'List'  || fld.kind == 'Map') {
            addImplImport(fld.classDef, outImports);
        }
    })
    fields = fields.sort((f1, f2) => f1.methodName.toLowerCase() - f2.methodName.toLowerCase());
    if(true || fields.length) {
        fields.forEach(fld => {
            if( fld.methodName.match(/^[a-zA-Z$_]/) && fld.kind === 'Map' ) {
                let jn = mapImplFullname(def.javaName, fld.methodName), e2v = fld.enumNameToValue;
                out.push(`class ${jn} extends ModelProxy<${jn}> implements IArfSet {`);
                Object.keys(e2v).forEach(cur => {
                    let mname = e2v[cur];
                    out.push(`    @Observable(${defToImplFullname(fld.classDef)})`,
                             `    ${mname}: ${fld.retTypeDef}`, ``);
                });
                out.push(`}`);
            }
        })
        out.push(`export class ${defToImplFullname(def.javaName)} extends ModelProxy<${def.javaName}> implements ${def.javaName} {`);
        fields.forEach(fld => {
            if( fld.methodName.match(/^[a-zA-Z$_]/) ) {
                let mname = fld.methodName;
                switch(fld.kind) {
                case 'Simple':
                    out.push(`    @Observable()`,
                             `    ${mname}: ${fld.retTypeDef}`,``);
                    break;
                case 'Set':
                    out.push(`    @Observable(${defToImplFullname(fld.classDef)})`,
                             `    ${mname}: ${fld.retTypeDef}`,``);
                    break;
                case 'List':
                    out.push(`    @Observable([${defToImplFullname(fld.classDef)}])`, 
                             `    ${mname}: ${fld.retTypeDef}[]`,``);
                    break;
                case 'Map':
                    let ename = fld.enumName;
                    out.push(`    @Observable(${mapImplFullname(def.javaName, mname)})`,
                             `    ${mname}: {[K in ${ename}]: ${fld.retTypeDef}}&IArfSet`,``);
                    break;
                }
            }
        })
        out.push("}");
    } else {
        out.push(`let ${defToImplFullname(def.javaName)} = ${base.match(/ModelProxy/) ? 'ModelProxy' : base};`);
    }
}

function addDefinition(parts, prefix, def) {
    parts.reduce((ns, part) => ns[part] || (ns[part] = {}), nameSpaces)[prefix] = def;
}

Object.keys(defs).forEach(fullName => {
    let parts = fullName.split('.');
    let className = parts.pop();
    addDefinition( parts, className, defineInterface(defs[fullName]) );
});

function printNamespace(ns, name, depth, out) {
    let pad = "    ".repeat(depth), me = ns[name];
    out.push(pad + "export namespace " + name + " {");

    Object.keys(me).forEach(item => {
        let next = me[item];
        if(Array.isArray(next)) {
            out.push("    " + pad + next.join("\n    " + pad));
        } else {
            printNamespace(me, item, depth + 1, out);
        }
    })
    out.push(pad + "}");
    return out;
}

function printNamespaces(nameSpaces) {
    let out = [`import {IArfSet} from "../api/proxy"`,
        "",
        "type Diff<T extends string | number | symbol, U extends string | number | symbol> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];",
        "type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>",
        ""
    ];
    Object.keys(nameSpaces).forEach( key => printNamespace(nameSpaces, key, 0, out ) )
    return out;
}

let implHeader = [
    `import {ModelProxy, Observable, IArfSet} from "../../api/proxy"`, 
    `import {${Object.keys(nameSpaces).join(', ')}} from "../${baseName}"`,
    "",
    ""
]

let allImpls = {};
let implImports = {};

for(let skipped = 1, done = {}; skipped; ) {
    skipped = 0;
    Object.keys(defs).forEach(function(def) {
        if(done[def]) {
            return ;
        }
        if(defs[def].javaExtends.some(cls => !done[cls]) || defs[def].fields.some(fld => fld.classDef && !done[fld.classDef])) {
            skipped++;
            return ;
        }
        let pckg = def.split('.');
        let name = pckg.pop();
        pckg = pckg.join('.');
        let out = allImpls[pckg]||(allImpls[pckg] = implHeader.concat());
        let ii = implImports[pckg]||(implImports[pckg] = {})
        implementInterface(defs[def], out, ii);
        done[def] = true
    })
}

rmdir(outDir);
mkdirp(outDir + '/impl/');
fs.writeFileSync(outDir + '/' + baseName +  '.ts', printNamespaces(nameSpaces).join("\n"));
Object.keys(allImpls).forEach(pckg => {
    let ii = Object.keys(implImports[pckg]).filter(nm => nm != pckg).
        map(nm => `import {${implImports[pckg][nm].join(', ')}} from "./${nm}"` );
    ii.length && allImpls[pckg].splice(3, 0, ii.join("\n"));
    fs.writeFileSync(outDir + '/impl/' + pckg +  '.ts', allImpls[pckg].join("\n"));
})


//fs.writeFileSync(outDir + '/' + baseName +  '-impl.ts', allImpls.join("\n"));
