const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu-list');
const logo = document.querySelector('.logo');


hamburgerMenu.addEventListener('click', function() {
    menu.classList.toggle('activate');
    logo.classList.toggle('hidden');
  });

function sticky() {
  var menu2 = document.querySelector('.menu2');
  if (window.innerWidth >= 768) {
    menu2.classList.add('sticky');
  } else {
    menu2.classList.remove('sticky');
  }
}

// Call the function on page load
sticky();

// Call the function on window resize
window.addEventListener('resize', sticky);