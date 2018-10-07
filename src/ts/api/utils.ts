export interface ValueDescription<T> { value: T, description: string }

export interface ChoiceInfo<T> {
    value: T,
    items: ValueDescription<T>[],
}

export function testChoice(a: any, b: any): boolean {
    return a == b || typeof a === 'object' && typeof b === 'object' && Object.keys(a).every(i => a[i] == b[i]);
}

export let arfDatePattern = /^(18|19|20)((\\d\\d(((0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-8]))|((0[13578]|1[02])(29|30|31))|((0[4,6,9]|11)(29|30))))|(([02468][048]|[13579][26])0229))$/;

export function required<T>(value: string|number|ChoiceInfo<T>, pattern?: RegExp|string, message?: string): string {
    if( !value || value.toString().replace(/ /g, '') === '' ) {
        return message || 'Required';
    } else {
        if( typeof value === 'object' && Array.isArray(value.items) ) {
            let v = value.value;
            if( !v || v.toString().replace(/ /g, '') === '' ) {
                return message || 'Required';
            }
            return value.items.some( item => testChoice(v, item.value !== undefined ? item.value : item) ) ? '' : message || 'Required';
        }
        if( pattern === 'date' && !value.toString().match(arfDatePattern) || pattern instanceof RegExp && ! value.toString().match(pattern) ) {
            return message || 'Invalid format';
        }
        return '';
    }
}

let modifiedSince: any;
export function reloadIfSourceChanged(interval: number): void {
    if(!modifiedSince) {
        modifiedSince = (new Date() as any).toGMTString();
        let keepGoing = true;
        setInterval(function() {
            var scripts = document.querySelectorAll('script[src]');
            for(var i = 0; keepGoing && i < scripts.length; i++) {
                (function(url) {
                    if(new URL(url).hostname === new URL(location.href).hostname ) {
                        var xhr = new XMLHttpRequest();
                        xhr.open("HEAD", url, true);
                        xhr.setRequestHeader("If-Modified-Since", modifiedSince);
                        xhr.onreadystatechange = function() {
                            if(keepGoing && xhr.readyState === 4 && xhr.status === 200) { // Modified
                                keepGoing = false;
                                setTimeout(() => location.reload(), 1000);
                            }
                        }
                        xhr.send();
                    }
                })((scripts[i] as HTMLScriptElement).src)
            }
        }, interval);
    }
}
