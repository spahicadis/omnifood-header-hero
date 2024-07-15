const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-desktop');

  hamburger.addEventListener('click', function() {
  nav.classList.contains('transition-nav') ? nav.classList.remove('transition-nav') : nav.classList.add('transition-nav')  
  });
