const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.menu__item-toggle');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

const map = document.querySelector('.contacts__map');

map.classList.remove('contacts__map--nojs');
