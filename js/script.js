let bg_btn = document.querySelector('.header_li_right');
let menu = document.querySelector('.burger_menu');
let all_lines = document.querySelectorAll('.burger_center')
bg_btn.addEventListener('click', function(){
    menu.classList.toggle('active')
    menu.classList.toggle('header_li_right')
    all_lines[0].classList.toggle('top')
    all_lines[2].classList.toggle('bot')
    all_lines[1].classList.toggle('mid')
})