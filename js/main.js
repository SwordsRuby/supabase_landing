
//function for visible dropdown menu and faq answer
function visible(el) {
    el.childNodes[1].lastElementChild.classList.toggle('rotate');

    el.childNodes[3].classList.toggle('none');
}


//function for select img on tabIndex button
function tabIndexSelect(img, tabNumber) {
    const tabButton = document.querySelectorAll('.dashboard-button');
    const tabContent = document.querySelectorAll('.right-dashboard');
    for (let index = 0; index < tabButton.length; index++) {
        tabButton[index].classList.remove('dashboard-button-active');
        tabContent[index].classList.remove('right-active');
    }

    document.querySelectorAll('.dashboard-button')[tabNumber].classList.add('dashboard-button-active');
    document.querySelectorAll('.right-dashboard')[tabNumber].classList.add('right-active');

    const tabImg = document.querySelector('.dashboard-img');
    tabImg.src = img;
}


//function for swap theme on page
function themeSwap(el) {
    document.body.classList.toggle('light-theme');

    el.firstElementChild.classList.toggle('theme-toggle-active');

    const img = document.querySelectorAll('.reverse');
    for (let index = 0; index < img.length; index++) {
        img[index].classList.toggle('img-reverse');
    }
}


//setTimer slider
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
slides[currentIndex].classList.add('active');

setInterval(() => {
    slides[currentIndex].classList.remove('active');
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    slides[currentIndex].classList.add('active');
}, 5000);


//authorization show-hidden function
function auth() {
    const authBlock = document.querySelector('.auth-block');

    authBlock.classList.toggle('none');
}


//registration show-hidden function
function reg() {
    const regBlock = document.querySelector('.reg-block');

    regBlock.classList.toggle('none');
}