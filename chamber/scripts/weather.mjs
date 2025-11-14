import { apiFetch } from "./apiFetch.mjs";
import { displayForecastResults, displayWeatherResults } from "./displayweather.mjs";

const weatherElements =
{
    weatherIcon: document.getElementById('weather-icon'),
    figCaption: document.querySelector('figcaption'),
    currentTemp: document.getElementById('current-temp'),
    unit: document.querySelectorAll('.unit'),
    high: document.getElementById('high'),
    low: document.getElementById('low'),
    humidity: document.getElementById('humidity'),
    sunrise: document.getElementById('sunrise'),
    sunset: document.getElementById('sunset')
};

const forecastElements =
{
    forecastDate1: document.getElementById('forecastDate1'),
    forecastDate2: document.getElementById('forecastDate2'),
    forecastDate3: document.getElementById('forecastDate3'),

    forecastDay1: document.getElementById('forecastDay1'),
    forecastDay2: document.getElementById('forecastDay2'),
    forecastDay3: document.getElementById('forecastDay3'),

    descriptionDay1: document.getElementById('descriptionDay1'),
    descriptionDay2: document.getElementById('descriptionDay2'),
    descriptionDay3: document.getElementById('descriptionDay3')
}

let latitude = '40.305593891803426';
let longitude = '-111.7497794325093';
let units = 'imperial'
const apiKey = '94437e1ca6e81a4381596c5a26524264'

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

const weatherData = await apiFetch(url);
const forecastData = await apiFetch(forecastURL);

displayWeatherResults(weatherData, weatherElements);
displayForecastResults(forecastData, forecastElements);


window.onLoad = () => {
    console.log("onload fired.");

    displayWeatherResults(weatherData, weatherElements);
    displayForecastResults(forecastData, forecastElements);
};
