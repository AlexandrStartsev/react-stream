import * as React from "react";
import { ChoiceInfo } from "./dfe-stream";
import { IArfSet } from "./proxy";

export function stringChoiceMaker(v: string, e: string[]): ChoiceInfo<string> {
    let ok = (e as any)._choice;
    return { value: v, items: ok ? ok : (e as any)._choice = e.map(k => ({value: k, description: k})) };
}

export function enumChoiceMaker<T>(v: T, e: any): ChoiceInfo<T> {
    let ok = e[-1];
    return { 
        value: v,
        items: ok ? ok : e[-1] = Object.getOwnPropertyNames(e).filter(k => isNaN(+k) && k!=="NULL").map(
            k => (isNaN(e[k]) ? { value: e[k], description: e[k]} : {value: k, description: k} )
        )
    };
}

export interface EditboxProps { 
    hidden?: boolean
    disabled?: boolean
    className?: string
    style?: React.CSSProperties
    transform?: string
    maxLength?: number
    spellCheck?: boolean
    name?: string
    format?: string
    trigger?: "change" | "blur"
    pattern?: RegExp
    type?: "datepicker" | "hidden"
    value?: string | number
    refUi?: (dom: HTMLInputElement) => void
    set?: (value?: string) => void
}

export class Editbox extends React.Component<EditboxProps> {
    static datePickerRequested = 0
    static patterning (v: string, p: RegExp) {
        while(p && !!v && !(v.match(p) && v.match(p)[0] == v) ) {
            v = v.substr(0, v.length-1);
        }
        return v;
    }
    static formatting (value: string, format: string) { // aka XXX-XXX-XXXX or MM/DD/YYYY
        if(format && typeof value !== 'undefined') {
            let ret = '', i, j, vn, vl, fn, fl;
            value = (Array.isArray(value) ? value[0] : value).toString().replace(/\W/g, '');
            for (i = 0, j = 0; i < format.length && j < value.length; i++) {
                vn = !(vl = value.charAt(j).match(/[A-Z]/i)) && !isNaN(parseInt(value.charAt(j)));
                fn = !(fl = format.charAt(i) == '_') && 'XdDmMyY9'.indexOf(format.charAt(i)) >= 0;
                if (fl && !vl || fn && !vn) break ;
                ret += fl && vl || fn && vn ? value.charAt(j++) : format.charAt(i);
            }
            value = ret;
        }
        return value||'';
    }
    ca: number
    ui: HTMLInputElement
    inputLock: boolean
    constructor(props: EditboxProps, context?: any) {
        super(props);
        this.ca = 0;
        props.type === "datepicker" && (Editbox.datePickerRequested++ || import("../../../resources/date-picker-polyfill"));
    }
    makeTransform() {
        let transform: number[];
        if(typeof this.props.transform == 'string') {
            transform = [];
            this.props.transform.split('').forEach(s => transform.push(s.charCodeAt(0)-(s.charCodeAt(0) > 57 ? 55 : 48)));
        }
        return transform;
    }
    onKeyUp(e: React.SyntheticEvent<HTMLInputElement>, store: boolean) {
        if(this.ui) {
            let data = Editbox.patterning(Editbox.formatting(this.ui.value, this.props.format), this.props.pattern); 
            delete this.inputLock;
            let transform = this.makeTransform();
            if(transform) {
                let t = []; 
                for(let i=0; i < transform.length; i++)
                    data.length > transform[i] && (t[i] = data.charAt(transform[i]));
                for(let i=0; i<t.length; i++) 
                    t[i] = t[i]||' ';
                data = t.join('');
            }
            this.getValueProcessed(data);
            let v = this.props.value;
            if(v === undefined || v === null) v = "";
            store && this.props.set && ( (v + "") !== data ) && this.props.set(data);
        }
    }
    onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        this.inputLock = true;
        let ui = e.target as HTMLInputElement, s = this.ui.selectionStart, v = ui.value, m; 
        if((e.key == 'Backspace' || e.key == 'Delete' || e.key == 'Del') && this.props.format && v.length != ui.selectionEnd) {
            e.preventDefault();
            s && (ui.selectionEnd = --ui.selectionStart);  
        } 
        if(!e.key || e.key.length > 1 || e.ctrlKey) 
            return ;
        if(this.props.format) {
            this.ca++;
            if(e.key == this.props.format[s]) { ui.selectionStart++; e.preventDefault(); return ; }
            while(this.props.format[s] && '_XdDmMyY9'.indexOf(this.props.format[s])==-1) s++;
            let ol = v.length, nl = Editbox.formatting(v.substr(0, s) + e.key + v.substr(s + 1), this.props.format).length;
            if(s < ol && nl >= ol || s >= ol && nl > ol ) {
                ui.value = ui.value.substr(0, s) + ui.value.substr(s + 1); 
                ui.selectionEnd = s; 
            } else {
                e.preventDefault();
                return ;
            }
        }
        if(this.props.pattern) {
            m = (v = ui.value.substr(0, s) + e.key + ui.value.substr(ui.selectionEnd)).match(this.props.pattern);
            (!m || m[0] != v) && (this.ca--, e.preventDefault());
        }
    }
    getValueProcessed(data: string) {
        let transform = this.makeTransform();
        if(transform) {
            let t = []; 
            for(let i=0;i<data.length; i++) 
                transform.length > i && (t[transform[i]] = data.charAt(i));
            data = t.join('');
        }
        data = Editbox.patterning(Editbox.formatting(data, this.props.format), this.props.pattern);
        if(this.ui && data != this.ui.value && !this.inputLock) {
            var v = this.ui.value, ss = this.ui.selectionStart;
            this.ui.value = data;
            if(this.props.format && ss >= this.ca && ss <= v.length && v != this.ui.value) {
                var over = this.props.format.substr(ss-this.ca, this.ca).replace(/[_XdDmMyY9]/g,'').length;
                if(document.activeElement == this.ui)
                    this.ui.selectionEnd = this.ui.selectionStart = ss + over; 
            }
            this.ca = 0;
        }
        return data;
    }
    render() {
        let {transform, format, trigger, pattern, value, set, refUi, ...rest } = this.props;
        return (
            <input 
                ref={ui => (this.ui = ui, refUi && refUi(ui))}
                onKeyDown={e => this.onKeyDown(e)}
                onKeyUp={e => this.onKeyUp(e, trigger !== 'blur')}
                onBlur={e => this.onKeyUp(e, true)}
                onChange={e => this.onKeyUp(e, trigger !== 'blur')}
                defaultValue={this.getValueProcessed(value===undefined? "" : value + "")}
                {...rest}
            />
        )
    }
}

export const EditboxDate = (props: EditboxProps) => <Editbox format="MM/DD/YYYY" transform="67890134" type="datepicker" {...props}/>

export class EditboxMoney extends Editbox {
    static formatting2(v: string, n: boolean, l: number) {
        do {
            v = (n?'':'$') + v.replace(/^0+|[^\d]/g,'').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        } while(l && v.length > l && (v=v.substr(0, v.length-1)));
        return v;
    }
    onKeyUp(e: React.SyntheticEvent<HTMLInputElement>, store: boolean) {
        if(this.ui) {
            delete this.inputLock;
            let ui = e.target, v = this.getValueProcessed(this.ui.value);
            v = v.replace(/[^\d.]/g,'');
            store && this.props.set && ( (v + "") !== this.props.value ) && this.props.set(v);
        }
    }
    onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        this.inputLock = true;
        let ui = e.target as HTMLInputElement, ml = (this.props.format && this.props.format.length) < EditboxMoney.formatting2(ui.value + '1', this.props.format && this.props.format.charAt(0) != '$', 99).length;
        if((e.key == ',' || e.key == 'Delete' || e.key == 'Del') && ui.value.charAt(ui.selectionStart) == ',') ui.selectionStart++;
        if((e.key == 'Delete' || e.key == 'Del') && ui.value.charAt(ui.selectionStart) == '$') ui.selectionStart++;
        !e.ctrlKey && e.key && e.key.length == 1 && ui.selectionStart == ui.selectionEnd && (e.key < '0' || e.key > '9' || ml) && e.preventDefault();
    }
    getValueProcessed(data: string) {
        Array.isArray(data) && (data=data[0]);
        data = (typeof data == 'string' || typeof data == 'number') ? EditboxMoney.formatting2(data, this.props.format && this.props.format.charAt(0) != '$', this.props.format && this.props.format.length) : '';
        if(data === '$') data = '';
        if(this.ui && data != this.ui.value && !this.inputLock) {
            let ss = this.ui.selectionStart, ov = this.ui.value, o = 0;
            this.ui.value = data;
            if(this.ui == document.activeElement) {
                for(let i=0;i<ss;i++) {
                    (data.charAt(i) == ',' || data.charAt(i) == '$') && o++;
                    (ov.charAt(i) == ',' || ov.charAt(i) == '$') && o--;
                }
                this.ui.selectionStart = this.ui.selectionEnd = ss + o - (ov.charAt(ss) == ',' && data.charAt(ss + o - 1) == ',' ? 1 : 0);
            }
        }
        return data;
    }
}

type DropdownProps<V extends string|number|string[]> = {
    data: {value: V, items: Array<{value: V, description: string}>}
    set: (value: V, event: React.ChangeEvent<HTMLSelectElement>) => void
    emptyOption?: boolean|string
    style?: React.CSSProperties
    disabled?: boolean
}

export class Dropdown<V extends string|number|string[]> extends React.Component<DropdownProps<V>> {
    render() {
        let {data, set, emptyOption, ...rest} = this.props, v: {value: V, description: string};
        return (
            <select onChange={e => set && set((v=data.items[e.target.selectedIndex + (emptyOption ? -1 : 0)], v ? v.value : null), e)} value={data.value} {...rest}>
                {emptyOption ? <option value="" key={-1}>{typeof emptyOption === "string" ? emptyOption : "Please select..."}</option> : null}
                {data.items.map(i => <option value={i.value} key={i.description}>{i.description}</option> )}
            </select>
        )
    }
}

type RadiolistProps<V> = {
    data: {value: V, items: Array<{value: V, description: string}>}
    set: (value: V, event: React.ChangeEvent<HTMLInputElement>) => void
    style?: React.CSSProperties
    disabled?: boolean
}

export class Radiolist<V> extends React.Component<RadiolistProps<V>> {
    static idx = 0
    name: string
    constructor(props: RadiolistProps<V>, ctx: any) {
        super(props, ctx);
        this.name = "Radiolist__" + (++Radiolist.idx);
    }
    render() {
        let {data, set, ...rest} = this.props;
        return data.items.map((item, i) => 
            <span key={i} {...rest}>
                <input type="radio" name={this.name} checked={data.value == item.value} onChange={e => set(item.value, e)}/>
                <label>{item.description}</label>
            </span> 
        )
    }
}

type CheckBoxProps = {
    value: string,
    set?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void,
    style?: React.CSSProperties,
    disabled?: boolean
}

export class Checkbox extends React.Component<CheckBoxProps> {
    render() {
        return <input type="checkbox" onChange={e => this.props.set && this.props.set(e.target.checked ? "Y" : "N", e)} checked={this.props.value === "Y"}/>
    }
}

type TabComponentProps<M> = {
    items: M[],
    className?: string,
    headerClass?: string,
    activeTabClass?: string,
    tabClass?: string,
    style?: React.CSSProperties,
    headerStyle?: React.CSSProperties,
    activeTabStyle?: React.CSSProperties,
    tabStyle?: React.CSSProperties,
    activeTab?: number,
    autoFocusNew?: boolean,
    headerFactory: (item?: M, active?: boolean) => React.ReactNode,
    bodyFactory: (item?: M) => React.ReactNode,
    bodyClass?: string,
    bodyStyle?: React.CSSProperties
}

export class TabComponent<M extends IArfSet> extends React.Component<TabComponentProps<M>, {activeTab?: number, lastItems: Set<number>}> {
    constructor(props: TabComponentProps<M>){
        super(props);
        this.state = { lastItems: new Set() }
    }
    static getDerivedStateFromProps(nextProps: Readonly<TabComponentProps<IArfSet>>, prevState: {activeTab: number, lastItems: Set<number>}) {
        let newItems = new Set(), newKey: number;
        nextProps.autoFocusNew && nextProps.items.forEach(i => (prevState.lastItems.has(i.key) || newKey !== undefined || (newKey = i.key), newItems.add(i.key)));
        if(typeof nextProps.activeTab === "number") {
            return {activeTab: nextProps.activeTab, lastItems: newItems}
        }
        if(typeof prevState.activeTab === "number" && !nextProps.items.some(i => i.key === prevState.activeTab)) {
            return {activeTab: nextProps.items.length ? nextProps.items[0].key : -1, lastItems: newItems}
        }
        if(typeof newKey === "number") {
            return {activeTab: newKey, lastItems: newItems}
        }
        return {lastItems: newItems}
    }
    render() {
        let activeItem: M;
        return (
            <div className={this.props.className} style={this.props.style}>
                <div className={this.props.headerClass} style={this.props.headerStyle}>
                    { this.props.items.map( item => {
                        let isActive = item.key === this.state.activeTab;
                        isActive && (activeItem = item);
                        return <div 
                            key={item.key}
                            onClick={() => this.setState({activeTab: item.key})} 
                            className={ isActive ? this.props.activeTabClass : this.props.tabClass }
                            style={ isActive ? this.props.activeTabStyle : this.props.tabStyle} > 
                            { this.props.headerFactory(item, isActive) }
                        </div>
                    })}
                </div>
                <div className={this.props.bodyClass} style={this.props.bodyStyle}>
                    { activeItem ? this.props.bodyFactory(activeItem) : null }
                </div>
            </div>
        )
    }
}

export const ValidationLabel = (props: {error?: string}) => !!props.error ? <span className="dfe-error">{props.error}</span> : null