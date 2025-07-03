/* DO NOT DESTROY */


const formSignUp = document.querySelector("#formSignUp");

const NameInp = document.querySelector(".NameInp");

const PassInp = document.querySelector(".PassInp");

const EmailInp = document.querySelector(".EmailInp");

let gif = document.querySelector(".gif");

let btnForm = document.querySelector(".btnForm");

let alertoFName = document.querySelector(".alertoFName")








const objectInp = {
    name: "",
    pass: "",
    email: ""
}


NameInp?.addEventListener("change", (e) => {

    objectInp.name = e.target.value;

})
PassInp?.addEventListener("change", (e) => {

    objectInp.pass = e.target.value;

})
EmailInp?.addEventListener("change", (e) => {

    objectInp.email = e.target.value;

})



console.log(localStorage);





formSignUp?.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(objectInp);


    localStorage.setItem("ObjectInp", JSON.stringify(objectInp));

    if (NameInp.value === "" || PassInp.value === "" || EmailInp.value === "") {
        NameInp.style.border = "1px,solid,red"
        PassInp.style.border = "1px,solid,red"
        EmailInp.style.border = "1px,solid,red"


    }else {
        location.href="login.html"
    }







})







const menu = document.querySelector(".menu");


const burgerMenu = document.querySelector(".burger-menu");




burgerMenu?.addEventListener("click", () => {

    console.log("salam");


    console.log(menu.getAttribute("style"));

    if (menu.style.left == "-100%") {
        menu.style.left = "0px";


    } else {
        menu.style.left = "-100%";
        console.log("salam");

    }
})

// LogIn starts





const formLogin = document.querySelector("#formLogin");
const NameLogin = document.querySelector(".NameLogin");
const PassLogin = document.querySelector(".PassLogin");


let local = JSON.parse(localStorage.getItem("ObjectInp"));




const AllInp = {
    name: "",
    password: ""

}


NameLogin?.addEventListener("change", (e) => {

    AllInp.name = e.target.value.trim();
})

PassLogin?.addEventListener("change", (e) => {

    AllInp.password = e.target.value.trim();
})




formLogin?.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(local.name, AllInp.name, local.pass, AllInp.password);


    if (AllInp.name == "" && AllInp.password == "") {
        alert("fill them");

    }

    else if (local.name === AllInp.name && local.pass === AllInp.password) {


        btnForm.style.gap = "20px";

        gif.style.display = "flex";
        setTimeout(() => {

            location.href = "home.html"
        }, 2000)

    } else if (AllInp.name == "") {
        NameLogin.style.backgroundColor = "red"
        alertoFName.style.opacity="1";

    } else if (AllInp.password == "") {
        PassLogin.style.backgroundColor = "red"
        alertoFName.style.opacity = "1";
    }

    else {

        alert("Login veyaxud parol shedir")

    }
})






// btnForm.style.gap = "20px";
// gif.style.display = "flex";
// NameLogin.style.border = "1px solid red"
// PassLogin.style.border = "1px solid red"







