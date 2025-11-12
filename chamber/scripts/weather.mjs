import { apiFetch } from "./apiFetch.mjs";
import { displayResults } from "./displayweather.mjs";

const weatherElements =
{
    weatherIcon: document.getElementById('weather-icon'),
    currentTemp: document.getElementById('current-temp'),
    figCaption: document.querySelector('figcaption')
};

let latitude = 'lat=40.305593891803426';
let longitude = 'lon=-111.7497794325093';
let units = 'units=imperial'
const apiKey = 'appid=94437e1ca6e81a4381596c5a26524264'

const url = `https://api.openweathermap.org/data/2.5/weather?${latitude}&${longitude}&${apiKey}&${units}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?${latitude}&${longitude}&${apiKey}&${units}`;

const weatherData = apiFetch(url);
const forecastData = apiFetch(forecastURL)

displayResults(weatherData, weatherElements);