import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from './constants.js';
import Glide from '@glidejs/glide';

const hamburgerIcon = document.getElementById('hamburger');
const navItemsContainer =
    document.getElementsByClassName('nav_item_container')[0];
const form = document.querySelector('form');
const footerIcons = document.querySelectorAll('.list__icon');
const crossBtn = document.getElementsByClassName('cross')[0];
const header = document.getElementsByClassName('header_container')[0];
const loginSignup = document.getElementsByClassName(
    'login_signup_container',
)[0];
const watchBtn = document.getElementById('watch');
const slides = [
    {
        image: '/assets/img/carousel.png',
        heading: 'Mark Smith ',
        occupation: '/ Travel Enthusiast',
        starCount: 1,
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    },
    {
        image: '/assets/img/carousel.png',
        heading: 'Sophia Lee ',
        occupation: '/ Adventure Blogger',
        starCount: 3,
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    },
    {
        image: '/assets/img/carousel.png',
        heading: 'James Carter ',
        occupation: '/ Explorer',
        starCount: 5,
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    },
];
const container = document.getElementById('carousel-container');
const bulletContainer = document.getElementById('bullet-container');
const glideTrackDiv = document.getElementsByClassName('glide__track')[0];
const arrowContainer = document.getElementsByClassName(
    'glide__arrow-container',
)[0];

slides.forEach((slide, index) => {
    const stars = Array(slide.starCount)
        .fill('<i class="icon icon--star glide__icon"></i>')
        .join('');

    const li = `
      <li class="glide__slide">
        <img class="testimonial__img" src="${slide.image}" alt="carousel slide image" />
        <div class="glide__slide-desc">
          <h4 class="glide__slide-heading">
            ${slide.heading}
            <span class="glide__slide-heading--span">${slide.occupation}</span>
          </h4>
          <div class="glide__icon-container">${stars}</div>
        </div>
        <p class="text text--md text--center text--gray line-clamp">${slide.text}</p>
      </li>
    `;
    container.insertAdjacentHTML('beforeend', li);
    const bullet = `<button class="glide__bullet" data-glide-dir="=${index}" aria-label="bullet ${index}"></button>`;
    bulletContainer.insertAdjacentHTML('beforeend', bullet);
});

watchBtn.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com';
});

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.add('d_hidden');
    navItemsContainer.classList.add('active');
});
hamburgerIcon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburgerIcon.click();
    }
});

crossBtn.addEventListener('click', () => {
    navItemsContainer.classList.remove('active');
    hamburgerIcon.classList.remove('d_hidden');
});
crossBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        crossBtn.click();
    }
});

new Glide('.glide').mount();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
        alert('Form is submitted');
    } else {
        form.reportValidity();
    }
});

footerIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        const targetId = icon.getAttribute('data-target');
        const list = document.getElementById(targetId);
        list.classList.toggle('list__item-container--hidden');
        icon.classList.toggle('rotated');
    });
    icon.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            icon.click();
        }
    });
});

navItemsContainer.addEventListener('keydown', (e) => {
    if (
        window.innerWidth >= TABLET_BREAKPOINT ||
        !navItemsContainer.classList.contains('active')
    )
        return;
    let focusable;
    if (window.innerWidth >= 480)
        focusable = document.querySelectorAll('.nav__item');
    else focusable = document.querySelectorAll('.nav__item, .nav__btn');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    function handleResponsive() {
        if (window.innerWidth < MOBILE_BREAKPOINT) {
            if (!navItemsContainer.contains(loginSignup)) {
                navItemsContainer.appendChild(loginSignup);
            }
            bulletContainer.insertAdjacentElement('afterend', arrowContainer);
        } else {
            if (loginSignup.parentNode !== header) {
                header.appendChild(loginSignup);
            }
            glideTrackDiv.insertAdjacentElement('afterend', arrowContainer);
        }
    }

    handleResponsive();

    window.addEventListener('resize', handleResponsive);
});
