import { apiFetch } from "./api-fetch.mjs";
import { getRandomIndicies } from "./random-indicies.mjs";

const url = 'https://vantaylor99.github.io/wdd231/chamber/data/members.json';
const businessData = await apiFetch(url);
const spotlightBusinessElement = document.getElementById('spotlightBusiness');
const spotlightAddress = document.getElementById('spotlightAddress');

const spotlightImage = document.getElementById("spotlightImage");
const spotlightEmail = document.getElementById("spotlightEmail");
const spotlightPhone = document.getElementById("spotlightPhone");
const spotlightURL = document.getElementById("spotlightURL");
const businessAray = businessData["Utah City Chamber of Commerce"].companies;
let randomNumber1 = Math.floor(Math.random() * businessAray.length);
let spotlightBusiness = businessAray[randomNumber1];

console.log(randomNumber1)
console.log(businessAray)

businessAray.splice(randomNumber1, 1)
console.log(businessAray)



function displayRanomBusiness() {
    spotlightBusinessElement.textContent = spotlightBusiness.name;
    spotlightAddress.textContent = spotlightBusiness.address;

    // image
    const filePath = spotlightBusiness.imageFileName
    spotlightImage.setAttribute('src', `images/company-images/${filePath}.png`);
    spotlightImage.setAttribute('alt', `Logo for ${spotlightBusiness.name}, a local business in Vineyard.`);
    spotlightImage.setAttribute('loading', 'lazy');
    spotlightImage.setAttribute('width', '300');
    spotlightImage.setAttribute('height', 'auto');

    spotlightEmail.textContent = spotlightBusiness.email;
    spotlightPhone.textContent = spotlightBusiness.phone;
    spotlightURL.setAttribute('href', spotlightBusiness.websiteURL);
    spotlightURL.innerHTML = `${spotlightBusiness.websiteURL}`;
}
displayRanomBusiness();




function displayPremiumBusinesses() {
    const premiumBusinessArray = [];
    businessAray.forEach(business => {
        if (business.membershipLevel === "Gold" || business.membershipLevel === "Silver") {
            premiumBusinessArray.push(business);
        }

    });

    const arrayLength = premiumBusinessArray.length
    const randomIndicies = getRandomIndicies(3, arrayLength)

    const premiumBusinessesToShow = [];
    premiumBusinessesToShow.push(premiumBusinessArray[randomIndicies[0]])
    premiumBusinessesToShow.push(premiumBusinessArray[randomIndicies[1]])
    premiumBusinessesToShow.push(premiumBusinessArray[randomIndicies[2]])

    console.log(premiumBusinessesToShow)

    premiumBusinessesToShow.forEach(premiumBusiness => {
        const businessSection = document.getElementById('businesses');
        let premiumBusinessDiv = document.createElement('div');
        premiumBusinessDiv.classList.add('premium-business')
        let premiumBusinessName = document.createElement('h2');
        let premiumBusinessAddress = document.createElement('p');
        let premiumBusinessImage = document.createElement("img");
        let premiumBusinessEmail = document.createElement("p");
        let premiumBusinessPhone = document.createElement("p");
        let premiumBusinessURL = document.createElement("p");




        premiumBusinessName.innerHTML = `${premiumBusiness.name}`;
        premiumBusinessAddress.innerHTML = `<strong>Address: </strong>${premiumBusiness.address}`;
        premiumBusinessEmail.innerHTML = `<strong>Email: </strong>${premiumBusiness.email}`;
        premiumBusinessPhone.innerHTML = `<strong>Phone: </strong>${premiumBusiness.phone}`;
        premiumBusinessURL.innerHTML = `<strong>Website: </strong><a href="${premiumBusiness.websiteURL}">${premiumBusiness.websiteURL}</a>`;

        // Image
        premiumBusinessImage.setAttribute('src', `images/company-images/${premiumBusiness.imageFileName}.png`)
        premiumBusinessImage.setAttribute('loading', 'lazy')
        premiumBusinessImage.setAttribute('width', '300')
        premiumBusinessImage.setAttribute('height', 'auto')



        businessSection.append(premiumBusinessDiv);
        premiumBusinessDiv.append(premiumBusinessName)
        premiumBusinessDiv.append(premiumBusinessAddress)
        premiumBusinessDiv.append(premiumBusinessImage)
        premiumBusinessDiv.append(premiumBusinessEmail)
        premiumBusinessDiv.append(premiumBusinessPhone)
        premiumBusinessDiv.append(premiumBusinessURL)
    });
}

displayPremiumBusinesses()