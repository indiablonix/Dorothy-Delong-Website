
let navToggle = document.querySelector('.navigation-toggle');
let menu = document.querySelector('.navigation-menu');

navToggle.addEventListener('click', function() {
  menu.classList.toggle('active-menu');
});

