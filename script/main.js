const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar-ul');
hamburger.addEventListener('click', toggle );
function toggle() {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
}
