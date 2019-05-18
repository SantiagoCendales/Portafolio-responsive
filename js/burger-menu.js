const ipad = window.matchMedia('screen and (max-width: 767px)')

const menu = document.querySelector('.header-menu');
const burgerButton = document.querySelector('#burger-menu');
const portfolio = document.querySelector('#port');
const experience = document.querySelector('#exp');
const contact = document.querySelector('#cont');


ipad.addListener(validation);
validation(ipad);
 
function validation(event) {
  if (!event.matches) {
    burgerButton.removeEventListener('click',showhide);
  }
  else {
    burgerButton.addEventListener('click',showhide);
    portfolio.addEventListener('click', hide);
    experience.addEventListener('click', hide);
    contact.addEventListener('click', hide);
  }
}

function showhide() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  }
  else {
    menu.classList.add('is-active');
  }
}

function hide (){
  menu.classList.remove('is-active');
}