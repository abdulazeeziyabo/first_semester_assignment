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
let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector(".middle-nav");

hamburger.addEventListener('click', ()=>{
hamburger.classList.toggle('active');
navbar.classList.toggle('active');
})
 