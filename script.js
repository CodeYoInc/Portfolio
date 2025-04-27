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

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');

  if (body.classList.contains('light-theme')) {
    body.classList.replace('bg-gradient-to-br', 'bg-gradient-to-tr');
    body.classList.replace('from-gray-900', 'from-white');
    body.classList.replace('via-gray-800', 'via-gray-200');
    body.classList.replace('to-gray-900', 'to-white');
    body.classList.replace('text-white', 'text-gray-900');
    themeIcon.textContent = '☀️';
  } else {
    body.classList.replace('bg-gradient-to-tr', 'bg-gradient-to-br');
    body.classList.replace('from-white', 'from-gray-900');
    body.classList.replace('via-gray-200', 'via-gray-800');
    body.classList.replace('to-white', 'to-gray-900');
    body.classList.replace('text-gray-900', 'text-white');
    themeIcon.textContent = '🌙';
  }
});
