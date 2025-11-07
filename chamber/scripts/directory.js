const url = 'https://vantaylor99.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#directory-cards');


async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    displayProphets(data.companies)
}

const prophets = getProphetData();

console.log(prophets)


// const displayProphets = (prophets) => {
//     prophets.forEach(prophet => {
//         let card = document.createElement('section');
//         let fullName = document.createElement('h2');
//         let portrait = document.createElement('img');
//         let DOB = document.createElement('p');
//         let birthLocation = document.createElement('p');

//         card.classList.add('prophet-card')


//         fullName.textContent = `${prophet.name} ${prophet.lastname}`

//         portrait.setAttribute('src', prophet.imageurl);
//         portrait.setAttribute('alt', `A picture of ${prophet.name} ${prophet.lastname}, a prophet for the Church of Jesus Christ of Latter-day Saints.`);
//         portrait.setAttribute('loading', 'lazy');
//         portrait.setAttribute('width', '340');
//         portrait.setAttribute('height', '440');

//         DOB.textContent = `Date of Birth: ${prophet.birthdate}`;
//         birthLocation.textContent = `Place of Birth: ${prophet.birthplace}`


//         card.appendChild(fullName);
//         card.appendChild(DOB);
//         card.appendChild(birthLocation);
//         card.appendChild(portrait);

//         cards.appendChild(card);
//     });
// }
