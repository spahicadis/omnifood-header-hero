function toogle() {
  const hamburger = document.querySelector('.toogle');
  hamburger.addEventListener('click', function() {
    const mobileMenuList = document.querySelector('.hamburger-menu-list');
    mobileMenuList.classList.add('hamburger-menu-list-open')
    
  })
}

toogle()