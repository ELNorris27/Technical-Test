const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', function() {
  openIcon.classList.toggle('icon-toggle');
  closeIcon.classList.toggle('icon-toggle');
  menuLinks.classList.toggle('active');
  overlay.classList.toggle('overlay-hidden');
})