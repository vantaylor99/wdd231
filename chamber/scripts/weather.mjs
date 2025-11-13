import { apiFetch } from "./apiFetch.mjs";
import { displayWeatherResults } from "./displayweather.mjs";

const weatherElements =
{
    weatherIcon: document.getElementById('weather-icon'),
    figCaption: document.querySelector('figcaption'),
    currentTemp: document.getElementById('current-temp'),
    unit: document.getElementById('unit'),
    high: document.getElementById('high'),
    low: document.getElementById('low'),
    humidity: document.getElementById('humidity'),
    sunrise: document.getElementById('sunrise'),
    sunset: document.getElementById('sunset')
};



let latitude = '40.305593891803426';
let longitude = '-111.7497794325093';
let units = 'imperial'
const apiKey = '94437e1ca6e81a4381596c5a26524264'

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

const weatherData = await apiFetch(url);
const forecastData = await apiFetch(forecastURL);


window.onload = displayWeatherResults(weatherData, weatherElements);