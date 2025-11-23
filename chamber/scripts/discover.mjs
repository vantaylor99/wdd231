import { locations } from "../data/locations.mjs";
const locationData = locations
const locationSection = document.getElementById('locationSection')

console.log(locationData)


function displayLocations() {


    locationData.forEach(loc => {
        const locationName = document.createElement('h2');
        const locationFigure = document.createElement('figure');
        const locationImage = document.createElement('img');
        const locationImagePath = loc.filePath;
        const locationAddress = document.createElement('address');
        const locationDescription = document.createElement('p');
        const locationButton = document.createElement('button');
        const locationDiv = document.createElement('div')
        locationDiv.classList.add('location-card');


        locationName.textContent = `${loc.name}`;

        locationImage.setAttribute('src', locationImagePath);
        locationImage.setAttribute('alt', `Image of ${locationName}`);
        locationImage.setAttribute('loading', `lazy`);
        locationImage.setAttribute('width', `300`);
        locationImage.setAttribute('height', `auto`);
        locationFigure.appendChild(locationImage);

        locationAddress.textContent = `${loc.address}`;
        locationDescription.textContent = `${loc.description}`;
        locationButton.classList.add("button-dark");
        locationButton.textContent = `Learn more!`;


        locationDiv.appendChild(locationName);
        locationDiv.appendChild(locationFigure);
        locationDiv.appendChild(locationAddress);
        locationDiv.appendChild(locationDescription);
        locationDiv.appendChild(locationButton);
        locationSection.appendChild(locationDiv);
    });
}

displayLocations();




// logo.setAttribute('src', `images/company-images/${logoPath}.png`)
// logo.setAttribute('alt', `The logo for ${companyName}.`)
// logo.setAttribute('loading', 'lazy');
// logo.setAttribute('width', '300');
// logo.setAttribute('height', 'auto');