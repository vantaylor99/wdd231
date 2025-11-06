const navButton = document.querySelector('#nav-button');
const navLinks = document.querySelector('#nav-bar')
const navPages = document.querySelector('#nav-pages')

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
})

navPages.addEventListener('click', () => {
    navPages.classList.toggle('current');

})



const navigation = document.getElementById('nav-bar');
