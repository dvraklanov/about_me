const hamburger = document.querySelector('.hamburger');
const close_menu_btn = document.querySelector('.menu__close');
const menu = document.querySelector('.menu')
hamburger.addEventListener('click', function () {
    menu.classList.add('active')
}, false)

close_menu_btn.addEventListener('click', function () {
    menu.classList.remove('active')
}, false)


const rating_counters = document.querySelectorAll('.rating__item-counter')
const rating_lines = document.querySelectorAll('.rating__item-line')

rating_counters.forEach((counter, idx) => {
    let counter_text = counter.textContent
    counter_text = counter_text.substring(0, counter_text.length - 1)
    console.log(rating_lines[idx].children[0].style.width = `${counter_text}%`)
})