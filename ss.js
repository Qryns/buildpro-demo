/* ===================================
   LOADER
=================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

        }, 1200);

    }

});

/* ===================================
   MOBILE MENU
=================================== */

const menuBtn =
document.querySelector(".menu-btn");

const nav =
document.querySelector("#nav");

if(menuBtn && nav){

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menuBtn.innerHTML =
        '<i class="fas fa-times"></i>';

    }else{

        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';

    }

});

}

/* ===================================
   CLOSE MENU AFTER CLICK
=================================== */

document
.querySelectorAll("#nav a")
.forEach(link => {

link.addEventListener("click", () => {

    if(nav){

        nav.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';
    }

});

});

/* ===================================
   HEADER SCROLL EFFECT
=================================== */

const header =
document.querySelector("header");

window.addEventListener("scroll", () => {

if(!header) return;

if(window.scrollY > 80){

    header.style.background =
    "rgba(0,0,0,0.95)";

    header.style.padding =
    "15px 8%";

    header.style.boxShadow =
    "0 5px 20px rgba(0,0,0,0.4)";

}
else{

    header.style.background =
    "rgba(0,0,0,0.9)";

    header.style.padding =
    "20px 8%";

    header.style.boxShadow =
    "none";

}

});

/* ===================================
   ACTIVE MENU LINK
=================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("#nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

    const top =
    section.offsetTop - 150;

    const height =
    section.offsetHeight;

    if(
        window.scrollY >= top &&
        window.scrollY < top + height
    ){
        current =
        section.getAttribute("id");
    }

});

navLinks.forEach(link => {

    link.classList.remove("active-link");

    if(
        link.getAttribute("href")
        === "#" + current
    ){
        link.classList.add("active-link");
    }

});

});

/* ===================================
   SCROLL ANIMATIONS
=================================== */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";

}

});

},

{
threshold:0.15
}

);

const animatedItems =
document.querySelectorAll(
".stat-box, .service-card, .project-grid img, .about-content, form"
);

animatedItems.forEach(item => {

item.style.opacity = "0";

item.style.transform =
"translateY(40px)";

item.style.transition =
"all 0.8s ease";

observer.observe(item);

});

/* ===================================
   COUNTER ANIMATION
=================================== */

const counters =
document.querySelectorAll(".stat-box h2");

let counterStarted = false;

window.addEventListener("scroll", () => {

const stats =
document.querySelector(".stats");

if(!stats) return;

const trigger =
stats.offsetTop - 250;

if(window.scrollY > trigger &&
!counterStarted){

counterStarted = true;

counters.forEach(counter => {

let target =
counter.innerText.replace(/\D/g,'');

target = parseInt(target);

let count = 0;

let speed =
Math.max(target / 100, 1);

function updateCounter(){

if(count < target){

count += speed;

counter.innerText =
Math.floor(count) + "+";

requestAnimationFrame(
updateCounter
);

}
else{

counter.innerText =
target + "+";

}

}

updateCounter();

});

}

});

/* ===================================
   PROJECT IMAGE HOVER
=================================== */

document
.querySelectorAll(".project-grid img")
.forEach(img => {

img.addEventListener("mouseenter", () => {

img.style.transform =
"scale(1.05)";

});

img.addEventListener("mouseleave", () => {

img.style.transform =
"scale(1)";

});

});

/* ===================================
   CONTACT FORM
=================================== */

const form =
document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you! Your project request has been submitted successfully."
);

form.reset();

});

}

/* ===================================
   SCROLL TO TOP BUTTON
=================================== */

const scrollBtn =
document.createElement("div");

scrollBtn.classList.add("scroll-top");

scrollBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
position:fixed;
right:20px;
bottom:20px;
width:50px;
height:50px;
background:#ff6b00;
color:#fff;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
cursor:pointer;
font-size:18px;
z-index:999;
opacity:0;
transition:.3s;
box-shadow:0 10px 20px rgba(0,0,0,.4);
`;

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

scrollBtn.style.opacity = "1";

}else{

scrollBtn.style.opacity = "0";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

/* ===================================
   PARALLAX HERO
=================================== */

const hero =
document.querySelector(".hero");

window.addEventListener("scroll",()=>{

if(hero){

let scroll =
window.pageYOffset;

hero.style.backgroundPositionY =
scroll * 0.4 + "px";

}

});

/* ===================================
   BUTTON HOVER GLOW
=================================== */

document.querySelectorAll(".btn")
.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow =
"0 10px 30px rgba(255,107,0,.5)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow =
"none";

});

});

/* ===================================
   CONSOLE BRANDING
=================================== */

console.log(
"%cBUILDPRO CONSTRUCTION",
"color:#ff6b00;font-size:20px;font-weight:bold;"
);

console.log(
"%cPremium Construction Website Demo",
"color:white;font-size:14px;"
);
