// Target navbar and hero elements
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

// If the window is scrolled beyond the hero section, apply
// the stick class to the header
window.addEventListener('scroll', () => {
    if (window.scrollY >= 5) {
        header.classList.add('stick');
    } else {
        header.classList.remove('stick');
    }
});