let navbar = document.querySelector("nav");
let navul = document.querySelector(".nav-ul");
let fcont = document.querySelector(".cont")
let homeLink = document.querySelector(".home-link")
let changeHeder = () => {  
    homeLink.className = "nav-link border home-link towhite"
    fcont.className = "cont navbar navbar-dark container-fluid d-flex py-3 mb-4 border-bottom navbar-expand-sm"
    navbar.className = "bg-green sticky-top"
};
window.addEventListener("load", ()=> { document.querySelector("body").style.width="100%"})
document.addEventListener("scroll", changeHeder);
