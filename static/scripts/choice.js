const input = document.getElementById('input');
const submit = document.getElementById('submit');

const uv = document.getElementById('ultraviolet');
const rhodium = document.getElementById('rhodium');

window.addEventListener('load', () => {
    const currentproxy = localStorage.getItem('proxy');
    if (currentproxy !== null) {
        document.getElementById(currentproxy).classList.add('selected');
    }
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getProxy()
    }
});

function getProxy(url = input.value.trim()) {
    if (localStorage.getItem('proxy') === 'rhodium') {
        if (!isUrlVal(url)) url = 'http://' + url;
        window.location.href =  `/rhodium/gateway?url=${url}`;
    } else if (localStorage.getItem('proxy') === 'ultraviolet') {
        window.navigator.serviceWorker.register('./sw.js', {
            scope: __uv$config.prefix
        }).then(() => {
            if (!isUrlVal(url)) url = 'http://' + url;
            window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
        })        
    }
};
function setProxy(proxy) {
    localStorage.setItem('proxy', proxy)
    if (proxy == 'rhodium') {
        rhodium.classList.add('selected')
        uv.classList.remove('selected')
    } else if (proxy == 'ultraviolet') {
        rhodium.classList.remove('selected')
        uv.classList.add('selected')
    }
};
function isUrlVal(url) {
    return /https?:\/\//.test(url);
};