/* 
  Khalil Nazari 
  03 Oct 2020
*/

document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));



// All Microsoft
const all_mic_btn = document.querySelector('.all-microsoft-btn'); 
const all_mic_menu = document.querySelector('.all-microsoft-menu'); 

all_mic_btn.addEventListener('click', () => {
    all_mic_btn.classList.toggle('all-microsoft-btn-active'); 

    all_mic_menu.classList.toggle('all-microsoft-menu-show')
})