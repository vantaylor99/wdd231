const url = 'https://vantaylor99.github.io/wdd231/chamber/data/members.json';
const directoryCards = document.querySelector('#directory-cards');



async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data["Utah City Chamber of Commerce"].companies)
}



const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        let companyName = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let websiteUrl = document.createElement('a');
        let membershipLevel = document.createElement('p');
        let Sponsorship = document.createElement('p');
        let logoPath = member["image-file-name"];
        let infoDiv = document.createElement('div');
        infoDiv.classList.add('information-div');
        card.classList.add('directory-card');

        companyName.textContent = `${member.name}`

        logo.setAttribute('src', `images/company-images/${logoPath}.png`)
        logo.setAttribute('alt', `The logo for ${companyName}.`)
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', 'auto');

        address.innerHTML = `<strong>Address: </strong>${member.address}`
        phoneNumber.innerHTML = `<strong>Phone: </strong>${member["phone-number"]}`;
        websiteUrl.innerHTML = `<strong>Website: </strong>${member["website-url"]}`;

        membershipLevel.innerHTML = `<strong>Membership Level:</strong> ${member["membership-level"]}`;
        const isSponsored = member["sponsored-membership"]
        if (isSponsored) {
            Sponsorship.innerHTML = `<strong>Sponsored by Utah City</strong> ✔`
        }
        else {
            Sponsorship.innerHTML = `<em>Not sponsored by Utah City</em>`
        }

        card.appendChild(companyName);
        card.appendChild(logo);
        card.appendChild(infoDiv);
        infoDiv.appendChild(address);
        infoDiv.appendChild(phoneNumber);
        infoDiv.appendChild(websiteUrl);
        infoDiv.appendChild(membershipLevel)
        infoDiv.appendChild(Sponsorship)


        directoryCards.appendChild(card);
    });
}

getMemberData();

