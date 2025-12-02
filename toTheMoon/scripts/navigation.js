const navBar = document.getElementById('nav-bar');
const hamburger = document.getElementById('hamburger-button');



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    navBar.classList.toggle('open');
});
