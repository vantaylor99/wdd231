export function displayResults(data, { weatherIcon, currentTemp, figCaption, forecast }) {
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', `An icon displaying ${data.weather[0].description}`);
    currentTemp.textContent = data["main"].temp;
    figCaption.textContent = data.weather[0].description;
}
