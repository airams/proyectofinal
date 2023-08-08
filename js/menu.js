var menu = document.getElementById("menu-button");
var menucontent = document.getElementById("menu");

menu.addEventListener("click", ()=>{
    menucontent.classList.toggle("mobile-visible");
})