import { apiFetch } from "./apiFetch.mjs";

const url = 'https://vantaylor99.github.io/wdd231/chamber/data/members.json';
const businessData = await apiFetch(url);
const spotlightBusiness = document.getElementById('spotlight-business');
const spotlightAddress = document.getElementById('spotlight-address');

const spotlightImage = document.getElementById("spotlight-image");
const spotlightEmail = document.getElementById("spotlight-email");
const spotlightPhone = document.getElementById("spotlight-phone");
const spotlightURL = document.getElementById("spotlight-url");

console.log(businessData)
// console.log(spotlightAddress)



function displayRanomBusiness() {
    let randomNumber = Math.floor(Math.random() * 7);
    console.log(randomNumber)

    const jsonPath = 'businessData["Utah City Chamber of Commerce"].companies[randomNumber]';

    spotlightBusiness.textContent = jsonPath.name;
    spotlightAddress.textContent = jsonPath.address;

    // image
    // spotlightImage.setAttribute('src', jsonPath.imageFileName);
    // spotlightImage.setAttribute('alt', `Logo for ${jsonPath.name}, a local business in Vineyard.`);
    // spotlightImage.setAttribute('loading', 'lazy');
    // spotlightImage.setAttribute('width', '300');
    // spotlightImage.setAttribute('height', 'auto');

    // spotlightEmail.textContent = jsonPath.address;
    // spotlightPhone.textContent = jsonPath.phone; 
    // spotlightURL.textContent = jsonPath.URL;







}

displayRanomBusiness()