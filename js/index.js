let navbar = document.querySelector("nav");
let navul = document.querySelector(".nav-ul");
let navCont = document.querySelector(".navbar")
let homeLink = document.querySelector(".home-link");
let demoIcon = document.querySelector("#demoIcon");
const quotes = [
  "Our school is a building which has four walls with knowlegde and success inside",
  "Develp a passion to learn and you will never cease to grow",
  "* french quote",
  "Honesty, integrity, excellency and hardwork are our watch words."
];
let bodyScrolled = () => {  
    homeLink.className = "nav-link border home-link towhite";
    navCont.className = "mw-80  navbar navbar-dark container-fluid d-flex py-3 mb-0-4 border-bottom navbar-expand-sm";
    navbar.className = "bg-green sticky-top ";
    demoIcon.className = "back-to-top fixed-bottom shadow border";
    demoIcon.setAttribute("src", "./assets/top btn.png");
    setInterval(() => {
        demoIcon.className = "static-back-to-top fixed-bottom shadow border";
        setTimeout(() => {
            demoIcon.className = "back-to-top fixed-bottom shadow border";
        }, 2000);
    }, 8000);
};

let randomQuote = (array)=> {
    const randomNo = Math.floor(Math.random() * array.length);

    return array[randomNo];

    }
    
   setInterval(() => {
   
    // let randomChoice = randomQuote(quotes);
    
      //       let i = 0;
      //   let speed = 50;
      // if (i < randomChoice.length) {
      //   document.getElementById("demo").innerHTML += randomChoice.charAt(i);
      //   i++;
      //   setTimeout(typeWriter, speed);
      // }
    }, 50);
    let typeWriter = ()=> {
      let i = 1;
      let speed = 4000;
      
    if (i < randomQuote(quotes).length) {
      document.getElementById("autoWrite").innerHTML = randomQuote(quotes);
      i++;
      setTimeout(typeWriter, speed);
    }
    }
    // let randomChoice = randomQuote(quotes);
// let typeWriter = ()=> {
//     let i = 0;
//     let speed = 50;
//   if (i < randomChoice.length) {
//     document.getElementById("demo").innerHTML += randomChoice.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }


window.addEventListener("load", ()=> { document.querySelector("body").style.width="100%"});
document.addEventListener("scroll", bodyScrolled);
window.addEventListener("pageshow", typeWriter)