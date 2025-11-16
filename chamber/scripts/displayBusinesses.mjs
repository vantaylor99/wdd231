import { apiFetch } from "./apiFetch.mjs";

const url = 'https://vantaylor99.github.io/wdd231/chamber/data/members.json';
const businessData = await apiFetch(url);
const spotlightBusiness = document.getElementById('spotlightBusiness');
const spotlightAddress = document.getElementById('spotlightAddress');

const spotlightImage = document.getElementById("spotlightImage");
const spotlightEmail = document.getElementById("spotlightEmail");
const spotlightPhone = document.getElementById("spotlightPhone");
const spotlightURL = document.getElementById("spotlightURL");

console.log(businessData)
// console.log(spotlightAddress)


function displayRanomBusiness() {
    let randomNumber = Math.floor(Math.random() * 7);
    console.log(randomNumber)


    spotlightBusiness.textContent = businessData["Utah City Chamber of Commerce"].companies[randomNumber].name;
    spotlightAddress.textContent = businessData["Utah City Chamber of Commerce"].companies[randomNumber].address;

    // image
    spotlightImage.setAttribute('src', businessData["Utah City Chamber of Commerce"].companies[randomNumber].imageFileName);
    spotlightImage.setAttribute('alt', `Logo for ${businessData["Utah City Chamber of Commerce"].companies[randomNumber].name}, a local business in Vineyard.`);
    spotlightImage.setAttribute('loading', 'lazy');
    spotlightImage.setAttribute('width', '300');
    spotlightImage.setAttribute('height', 'auto');

    spotlightEmail.textContent = businessData["Utah City Chamber of Commerce"].companies[randomNumber].email;
    spotlightPhone.textContent = businessData["Utah City Chamber of Commerce"].companies[randomNumber].phone;
    spotlightURL.textContent = businessData["Utah City Chamber of Commerce"].companies[randomNumber].URL;







}

displayRanomBusiness()