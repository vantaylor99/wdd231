const navLinks = document.querySelector('#nav-bar')
const navPages = document.querySelector('#nav-pages')
const navButton = document.querySelector('#nav-button')

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
})

const navigation = document.getElementById('nav-bar');
