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

    spotlightBusiness.textContent = businessData["Utah City Chamber of Commerce"].companies[randomNumber].name;
    spotlightAddress.textContent = businessData["Utah City Chamber of Commerce"].companies[randomNumber].address;

    // image
    // spotlightImage.setAttribute('alt') = `Logo for ${businessData["Utah City Chamber of Commerce"].companies[randomNumber].name}, a local business in Vineyard.`
    spotlightImage.setAttribute('src') = businessData["Utah City Chamber of Commerce"].companies[randomNumber].image - file - name;





}

displayRanomBusiness()