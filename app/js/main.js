'use strict';
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



const $slider = $('.client__slider').slick({
    infinite: true,
    /* autoplay: true, */
    autoplaySpeed: 3000,
    prevArrow: '<button class="client__slider-arrow client__slider-arrow--left" type="button"><img src="./images/client/arrLeft.svg" alt="left"></button>',
    nextArrow: '<button class="client__slider-arrow client__slider-arrow--right" type="button"><img src="./images/client/arrRight.svg" alt="left"></button>',

});


