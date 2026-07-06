// JavaScript сайту
function searchProduct(){

let text=document
.getElementById("searchInput")
.value
.toLowerCase();

if(text==""){
alert("Введіть назву товару");
return;
}

window.location.href=
"catalog.html?search="+text;

}
