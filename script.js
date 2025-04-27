// Iniciando a biblioteca AOS
AOS.init();

// Sticky Navbar Effect
window.onscroll = function() {
  stickyHeader();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

