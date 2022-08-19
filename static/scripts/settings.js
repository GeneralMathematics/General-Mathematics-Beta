if (getCookie("icon") == "")
{
    setCookie("icon", "./img/icons/math.ico", 365*100);
}
if (getCookie("title") == "")
{
    setCookie("title", "General Mathematics", 365*100);
}
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = getCookie("icon");
document.getElementsByTagName('head')[0].appendChild(link);

document.title = getCookie("title");
document.getElementsByTagName("TITLE")[0].text = getCookie("title");

function setIcon(lnk)
{
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = lnk;
    document.getElementsByTagName('head')[0].appendChild(link);
    setCookie("icon", lnk, 365*100);
}
function setTitle(title)
{
    document.title = title;
    document.getElementsByTagName("TITLE")[0].text = title;
    setCookie("title", title, 365*100);
}
//cookie functions from w3schools
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
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
pallet = "bg/#fff;detextcol/#222;sharebg/#f2f2f2;sharehover/#E1E1E1;searchborder/#d9d9d9;searchbg/#f5f5f5;findtext/#666;botlinks/#e4e4e4;searchhovbg/#f8f8f8;searchhovshad/rgba(0, 0, 0, 0.1);searchhovtext/#333;overlaybg/#ccc";

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
  window.location.href=window.location.href
  window.location.reload()
}
