import { apiFetch } from "./apiFetch.mjs";

const url = 'https://vantaylor99.github.io/wdd231/chamber/data/members.json';
const businessData = await apiFetch(url);
const spotlightBusiness = document.getElementById('spotlightBusiness');
const spotlightAddress = document.getElementById('spotlightAddress');

const spotlightImage = document.getElementById("spotlightImage");
const spotlightEmail = document.getElementById("spotlightEmail");
const spotlightPhone = document.getElementById("spotlightPhone");
const spotlightURL = document.getElementById("spotlightURL");

const premiumBusiness = document.getElementById('premiumBusiness');
const premiumAddress = document.getElementById('premiumAddress');

const premiumImage = document.getElementById("premiumImage");
const premiumEmail = document.getElementById("premiumEmail");
const premiumPhone = document.getElementById("premiumPhone");
const premiumURL = document.getElementById("premiumURL");


console.log(businessData)
console.log(spotlightImage)

// console.log(spotlightAddress)


function displayRanomBusiness() {
    let randomNumber = Math.floor(Math.random() * 7);
    spotlightBusiness.textContent = businessData["Utah City Chamber of Commerce"].companies[randomNumber].name;
    spotlightAddress.textContent = businessData["Utah City Chamber of Commerce"].companies[randomNumber].address;

    // image
    const filePath = businessData["Utah City Chamber of Commerce"].companies[randomNumber].imageFileName
    spotlightImage.setAttribute('src', `images/company-images/${filePath}.png`);
    spotlightImage.setAttribute('alt', `Logo for ${businessData["Utah City Chamber of Commerce"].companies[randomNumber].name}, a local business in Vineyard.`);
    spotlightImage.setAttribute('loading', 'lazy');
    spotlightImage.setAttribute('width', '300');
    spotlightImage.setAttribute('height', 'auto');

    spotlightEmail.textContent = businessData["Utah City Chamber of Commerce"].companies[randomNumber].email;
    spotlightPhone.textContent = businessData["Utah City Chamber of Commerce"].companies[randomNumber].phone;
    spotlightURL.textContent = businessData["Utah City Chamber of Commerce"].companies[randomNumber].websiteURL;
}
displayRanomBusiness();


function displayPremiumBusinesses() {
    const businessAray = businessData["Utah City Chamber of Commerce"].companies;
    console.log(businessAray);
    const premiumBusinessArray = [];
    businessAray.forEach(business => {
        if (business.membershipLevel === "Gold" || business.membershipLevel === "Silver") {
            premiumBusinessArray.push(business);
        }

    });
    console.log(premiumBusinessArray)
}

displayPremiumBusinesses()