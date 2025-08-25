import { TABLET_BREAKPOINT } from './constants.js';
import Glide from '@glidejs/glide';

const hamburgerIcon = document.getElementById('hamburger');
const navItemsContainer =
    document.getElementsByClassName('nav_item_container')[0];
const form = document.querySelector('form');
const footerIcons = document.querySelectorAll('.list__icon');
const focusable = document.querySelectorAll('.nav__item');
const first = focusable[0];
const last = focusable[focusable.length - 1];


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

document.addEventListener('click', (e) => {
    if (document.body.offsetWidth >= TABLET_BREAKPOINT) return;
    if (
        !navItemsContainer.contains(e.target) &&
        !hamburgerIcon.contains(e.target)
    ) {
        navItemsContainer.classList.remove('active');
        hamburgerIcon.classList.remove('d_hidden');
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
        list.classList.toggle('d_hidden');
        icon.classList.toggle('rotated');
    });
});

navItemsContainer.addEventListener('keydown', (e) => {
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
