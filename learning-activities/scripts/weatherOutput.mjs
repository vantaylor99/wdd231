function displayResults(data) {
    document.getElementById('weather-icon').setAttribute('src') = `https://openweathermap.org/img/w/${data["weather"].icon}`;
    document.getElementById('current-temp').textContent = data["main"].temp;
    document.querySelector('figcaption').textContent = data["weather"].description;
}
