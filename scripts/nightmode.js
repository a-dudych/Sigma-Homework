window.addEventListener('DOMContentLoaded', (e) => {
    const toggle = document.querySelector('.switch__slider');
    toggle.addEventListener("click", check);
})

let elems = [
    '.header',
    '.retro',
    '.about',
    '.portfolio',
    '.blog',
    '.contacts',
    '.menu__link',
    '.section-header__separator__line',
    '.hobby__separator',
    '.browse-all__line',
    '.blog-post__separator-line',
    '.section-header__separator__line',
    '.hobby__separator',
    '.browse-all__line',
    '.blog-post__separator-line',
    '.retro__greeting',
    '.section-header__title',
    '.section-header__subtitle',
    '.hobby__title',
    '.hobby__subtitle',
    '.hobby__description',
    '.browse-all__text',
    '.blog-post__title',
    '.blog-post__info',
    '.blog-post__lead',
    '.section-header__separator__xxx',
    '.filters__text'
];

window.addEventListener('DOMContentLoaded', (e) => {
    let now = new Date();
    if (now.getHours() > 20 || now.getHours() < 6) {
        elems.forEach(addDark)
    }
})

function check() {
    setTimeout(() => {
        if (document.querySelector('.switch__input').checked) {
            elems.forEach(addDark)
        } else {
            elems.forEach(removeDark)}
    }, 1);
}

function addDark (item) {
    let elems = document.body.querySelectorAll(item);
    for (let i = 0; i < elems.length; i++) {
        elems[i].classList.add('dark')
    }
}

function removeDark(item) {
    let elems = document.body.querySelectorAll(item);
    for (let i = 0; i < elems.length; i++) {
        elems[i].classList.remove('dark')
    }
}