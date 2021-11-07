let aside = document.querySelector('.aside');
let headerBtn = document.querySelector('.header__btn');
let asideBtn = document.querySelector ('.aside__head');

document.querySelector('aside__close');


headerBtn.addEventListener('click', () => {
    aside.classList.remove('aside__close')
   
});

asideBtn.addEventListener('click', () => {
    aside.classList.add('aside__close')
})

// POPUP
/*let popupOpen = document.querySelector('.popup__btn');
let popupClose = document.querySelector('.modal__close');
document.querySelector('active');
document.querySelector('.modal__open');
let modal = document.querySelector('.modal__window');
let bodyBlock = document.querySelector('body')

 popupOpen.addEventListener('click', () => {
    modal.classList.add('active')
    modal.show
    bodyBlock.classList.add('modal__open')
})

popupClose.addEventListener('click', () => {
    modal.classList.remove('active')
    bodyBlock.classList.remove('modal__open')
 })*/

//  POPUP второй способ

let popupOpen = document.querySelector('.popup__btn');
let popupClose = document.querySelector('.modal__close');
let modal = document.querySelector('.modal__window');
let bodyBlock = document.querySelector('body');
document.querySelector('.modal__open');

popupOpen.addEventListener('click', () => {
    modal.style.display = "block";
    bodyBlock.classList.add('modal__open')
});
popupClose.addEventListener('click', () => {
    modal.style.display = "none";
    bodyBlock.classList.remove('modal__open');
});
modal.addEventListener('click', () => {
    modal.style.display = "none";
    bodyBlock.classList.remove('modal__open');
});
