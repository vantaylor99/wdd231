const weatherIcon = document.getElementById('weather-icon');
const currentTemp = document.getElementById('current-temp');
const figCaption = document.querySelector('figcaption');


let latitude = 'lat=49.7492441819091';
let longitude = 'lon=6.635038553638744';
let units = 'units=imperial'
const apiKey = 'appid=94437e1ca6e81a4381596c5a26524264'

const url = `https://api.openweathermap.org/data/2.5/weather?${latitude}&${longitude}&${apiKey}&${units}`;




apiFetch();





