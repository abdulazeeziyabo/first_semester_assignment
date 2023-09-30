//add scroll tothe navLinks
let navLinks = document.querySelectorAll('.nav-container a');
console.log(navLinks);
for(const link of navLinks){
 link.addEventListener('click', smoothScroll);
}
function smoothScroll(e){
e.preventDefault();
const href = this.getAttribute('href');
document.querySelector(href).scrollIntoView({
 behavior:'smooth'
}
 
)
}
// toggle menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector(".middle-nav");

menu.onclick=()=>{
  menu.classList.toggle('bx-x')
   navbar.classList.toggle("open");
}