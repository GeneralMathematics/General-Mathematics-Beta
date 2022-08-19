const form = document.querySelector('form');
const input = document.querySelector('input');
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("url") != null) {
  makeloader()
  document.getElementsByTagName("input")[0].value = urlParams.get("url");
  window.navigator.serviceWorker.register('./sw.js', {
    scope: __uv$config.prefix
  }).then(() => {
    let url = input.value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
    window.history.replaceState("object or string", "Title", "/"+window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);
    load(url);
  });
}

form.addEventListener('submit', async event => {
    makeloader()
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        load(url)
    });
});

function load(url){
  let hide = localStorage.getItem("hide");
  if (hide === 'on'){
    document.getElementById("particles-js").style.display='none';
    var elms = document.querySelectorAll("[id='hide']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.display='none';
    const frame = document.querySelector('.access-frame');
    frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    frame.style.display = 'block';
    document.querySelector('.access-panel').style.removeProperty('display');
  }
  else{
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  }
}

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function makeloader(){
	//Prepend Loader
	const loader = document.createElement("loader");
	loader.innerHTML = 
	`<div id="loader-wrapper">
	  <div id="loader"></div>
   
	  <div class="loader-section section-left"></div>
	  <div class="loader-section section-right"></div>
  </div>`;
	document.body.prepend(loader);
  }
  
  function removeLoader(){
	document.getElementById("loader-wrapper").style.display='none';
  }

document.body.addEventListener("keydown", function (event) {
    if (event.key === "=") {
        window.location.replace("https://drive.google.com/");
    }
});

function shuffle(elems) {
 
    allElems = (function(){
	var ret = [], l = elems.length;
	while (l--) { ret[ret.length] = elems[l]; }
	return ret;
    })();
 
    var shuffled = (function(){
        var l = allElems.length, ret = [];
        while (l--) {
            var random = Math.floor(Math.random() * allElems.length),
                randEl = allElems[random].cloneNode(true);
            allElems.splice(random, 1);
            ret[ret.length] = randEl;
        }
        return ret; 
    })(), l = elems.length;
 
    while (l--) {
        elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
        elems[l].parentNode.removeChild(elems[l]);
    }
 
}

function hidebyID(idname)
{
	var menu = document.querySelectorAll('#random > button')
	for (var i = 0; menu[i]; i++) {
		menu[i].style.display = "none"
	}
	var menu = document.querySelectorAll('#random > .' + idname)
	for (var i = 0; menu[i]; i++) {
		menu[i].style.display = "inline"
	}
}

function histhide(){
	if (localStorage.getItem("hide") === "on"){
	  localStorage.setItem("hide", "off");
	} 
	else {
	  localStorage.setItem("hide", "on")
	}
	buttoncheck();
}

// JS  for Sidebar Opening and Closing

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let back = document.querySelector("#back");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}

// JS for Pallets to change themes

function loadPallet(pal)//function to load pallets
{
  sheet = document.querySelector(':root');
  index = pal.split(";");
  
  for(x = 0; x < index.length - 1; x++)
  {
    varname = index[x].split("/")[0];
    col = index[x].split("/")[1];
    sheet.style.setProperty('--'+varname, col);
  }
  return sheet;
}
pallet = "background/url(./img/bg/default.svg);sidebarcolor1/#11101d;sidebarcolor2/#fff;textcolor/#fff;";

document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("stylepallet") !== ""){
	  pallet = localStorage.getItem("stylepallet");
	} 
	else {
	  localStorage.setItem("stylepallet", pallet)
	}
  loadPallet(pallet);
});
function savePallet(pal)
{
  localStorage.setItem("stylepallet", pal)
  loadPallet(pal);
  parent.location.href=parent.location.href
  parent.location.reload()
}

//Background Themes

const particles = tsParticles.domItem(0);
function loadPart(file) {
    tsParticles
        .loadJSON("tsparticles", file)
        .then((container) => {
            console.log("tsparticles config loaded from '" + file + "'");
        })
        .catch((error) => {
            console.error(error);
        });

    tsParticles.setOnClickHandler((event, particles) => {
        /* custom on click handler */
    });
    particles.play();
}

function openBlank () {
  var myWindow = window.open("about:blank", "_blank")
  if (o) return;
  o = true;
  const win = window.open("about:blank", "_blank");
  const style = document.createElement("style");
  style.innerHTML = `
    * {
      margin: 0;
      padding: 0;
      border: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #1F2937;
    }
  `;
  win.document.head.appendChild(style);
  const frame = document.createElement("iframe");
  frame.src = location.href;
  win.document.body.appendChild(frame);
  win.focus();
  window.close();
}

function iframe() {
  document.getElementById("iframe").style.display = "block";
}

function MyWindow1() {
  var myWindow1 = window.open('', 'myWindow1', 'scrollbars=1,height='+screen.availHeight+',width='+screen.availWidth);
  myWindow1.document.write('<!DOCTYPE html>\n\
<title>General Mathematics</title>\n\
<p><iframe src="./education.html" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%">\n\
<script>\n\
alert("");\n\
<\x2fscript>');
}