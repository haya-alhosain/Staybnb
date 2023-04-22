var bar = document.getElementById('bars');
var close = document.getElementById('close');
var links = document.getElementById('links');

if (bar) {
   bar.onclick = function () {
      links.classList.add('navbar');
      links.classList.remove('navbar-close');
      close.style.display = "block"
      bar.style.display = "none"
   }
}
if (close) {
   close.onclick = function () {
      links.classList.add('navbar-close');
      links.classList.remove('navbar');
      close.style.display = "none"
      bar.style.display = "block"
   }
}