export module utils {
    let modifiedSince: any;

    export function setDfeCustomStyle(css: string, formname?: string): void {
        if(typeof document == 'object') {
            var e = formname && document.getElementById(formname + '-custom-style') || document.head.appendChild(document.createElement('style'));
            formname && e.setAttribute('id', formname + '-custom-style');
            e.innerHTML = css;
        }
    }
    
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
}