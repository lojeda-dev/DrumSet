const menu = document.querySelector('.menu');
const links = document.querySelector('.ul-nav');

menu.addEventListener('click', () => {
    links.classList.toggle('active');
})