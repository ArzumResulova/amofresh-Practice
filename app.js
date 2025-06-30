/* DO NOT DESTROY */


const menu = document.querySelector(".menu");


const burgerMenu = document.querySelector(".burger-menu");




burgerMenu.addEventListener("click", () => {


    console.log(menu.getAttribute("style"));

    if (menu.style.left == "-100%") {
        menu.style.left = "0px";


    } else {
        menu.style.left = "-100%";
        console.log("salam");

    }
})















