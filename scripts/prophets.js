const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');



async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets)
}

const prophets = getProphetData();

console.log(prophets)


const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let DOB = document.createElement('p');
        let birthLocation = document.createElement('p');

        card.classList.add('prophet-card')


        fullName.textContent = `${prophet.name} ${prophet.lastname}`

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `A picture of ${prophet.name} ${prophet.lastname}, a prophet for the Church of Jesus Christ of Latter-day Saints.`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        DOB.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthLocation.textContent = `Place of Birth: ${prophet.birthplace}`


        card.appendChild(fullName);
        card.appendChild(DOB);
        card.appendChild(birthLocation);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

