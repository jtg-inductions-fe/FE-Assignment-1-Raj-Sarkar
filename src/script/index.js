import { TABLET_BREAKPOINT } from './constants.js';

const hamburgerIcon = document.getElementById('hamburger');
const navItemsContainer =
    document.getElementsByClassName('nav_item_container')[0];

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
