const welcomeDiv = document.getElementById('welcome-popup');
const msToDays = 86400000;
const todayMs = Date.now();

function setLastVisit() {
    localStorage.setItem("lastVisit", Date.now())
}


function getLastVisit() {
    let lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        setLastVisit()
        lastVisit = localStorage.getItem("lastVisit");
        return Number(lastVisit);
    }
    else {
        return Number(lastVisit);
    }
}


const daysSince = ((todayMs - getLastVisit()) / msToDays);
const welcomeMessage = document.createElement('h3');
const welcomeButton = document.createElement('button');
welcomeButton.classList.add('button-common')

function getWelcomeMessage() {
    let message = '';
    if (daysSince === 0) {
        message = 'Welcome! Let us know if you have any questions!'
    }
    else if (daysSince < 1) {
        message = 'Back so soon? Awesome!'
    }
    else {
        let plural = 'days'
        const wholeNumber = Math.floor(daysSince);
        console.log(wholeNumber)
        if (wholeNumber === 1) {
            plural = ''
            message = `You last visited ${wholeNumber} day${plural} ago.`
        }
        else {
            plural = 's'
            message = `You last visited ${wholeNumber} day${plural} ago.`
        }
    }
    return message;
}

function displayWelcomeMessage(message) {
    welcomeMessage.textContent = message;
    welcomeButton.textContent = "✕";
    welcomeDiv.appendChild(welcomeMessage);
    welcomeDiv.appendChild(welcomeButton);
}
displayWelcomeMessage(getWelcomeMessage());

document.addEventListener('DOMContentLoaded', () => {
    welcomeDiv.style.display = 'grid';

    welcomeButton.addEventListener('click', () => {
        welcomeDiv.style.display = 'none';
    })
})