'use strict';

/* tabs */
const tabBtns = document.querySelectorAll('.about__tabs-btn');
const tabItems = document.querySelectorAll('.about__tabs-item');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let currentBtn = btn;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabItems.forEach(item => item.classList.remove('about__tabs-item--active'));

            currentTab.classList.add('about__tabs-item--active');
            currentBtn.classList.add('active');
        }
    });
});

/* slider */
const $slider = $('.client__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    /* prevArrow: '<button class="client__slider-arrow client__slider-arrow--left" type="button"><img src="./images/client/arrLeft.svg" alt="left"></button>',
    nextArrow: '<button class="client__slider-arrow client__slider-arrow--right" type="button"><img src="./images/client/arrRight.svg" alt="left"></button>', */
});

/* validate form */
const form = document.querySelector('.footer__form');
const formInputs = document.querySelectorAll('.footer__input');
const inputPhone = document.querySelector('.footer__input-phone');

function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
}

form.onsubmit = function () {
    const phoneVal = inputPhone.value;
    const emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(input => {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filed');
        return false;
    }

    if (!validatePhone(phoneVal)) {
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }
};

/* animation */
function onEntry(entry) {
    entry.forEach(change => {
        console.log(change);
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

const options = {
    root: null,
    threshold: [0.2]
};
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('section');
const footer = document.querySelector('footer');

observer.observe(footer);
for (let elm of elements) {
    observer.observe(elm);
}