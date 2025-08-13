const hamburgerIcon = document.getElementById('hamburger');
const navItemsContainer = document.getElementById('nav-item-container');
const TABLET_BREAKPOINT = 1200;

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.add('hidden');
    navItemsContainer.classList.add('flex');
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
        navItemsContainer.classList.remove('flex');
        hamburgerIcon.classList.remove('hidden');
    }
});
