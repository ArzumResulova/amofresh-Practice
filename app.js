const btnCircle = document.querySelector(".circle");
const main = document.querySelector("main");
const header = document.querySelector("header");

let storage = localStorage.getItem("night");

if (storage) {

    btnCircle.style.left = "50px";
    main.style.backgroundColor = " rgba(0, 0, 128, 0.586)";
    header.style.backgroundColor = " rgba(0, 0, 128, 0.586)";
}



//   left:50px;

// console.log(btnCircle.getAttribute("style"));

// console.log(main.style.backgroundColor = "navy");


// console.log(main.hasAttribute("class"));



btnCircle.addEventListener("click", () => {

    if (btnCircle.style.left == "0px") {
        btnCircle.style.left = "50px";
        main.style.backgroundColor = " rgba(0, 0, 128, 0.586)";
        header.style.backgroundColor = " rgba(0, 0, 128, 0.586)";
        localStorage.setItem("night", "gece");
    } else {
        btnCircle.style.left = "0px";
        main.style.backgroundColor = "white";
        header.style.backgroundColor = "white";
        localStorage.removeItem("night")
    }
})