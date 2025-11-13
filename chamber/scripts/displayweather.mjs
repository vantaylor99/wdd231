export function displayWeatherResults(
    data,
    {
        weatherIcon,
        currentTemp,
        unit,
        figCaption,
        high,
        low,
        humidity,
        sunrise,
        sunset
    }
) {

    // Icon
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', `An icon displaying ${data.weather[0].description}`);

    // Temperature
    currentTemp.textContent = Math.ceil(data["main"].temp);

    // Unit
    const country = (data["sys"].country);
    if (country === "US") {
        unit.textContent = "°F"
    }
    else {
        unit.textContent = "°C"
    }

    // Fig Caption & Capitalization
    const description = data.weather[0].description;
    function capitalizeFirstLetter(word) {
        if (word.length === 0) {
            return ""
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    const capitalizedDescription = capitalizeFirstLetter(description);
    figCaption.textContent = capitalizedDescription + '.';

    // High
    high.textContent = Math.ceil(data.main.temp_max);

    // Low
    low.textContent = Math.ceil(data.main.temp_min);

    // Humidity
    humidity.textContent = data.main.humidity;

    // Sunrise
    const sunriseUniTime = data["sys"].sunrise;
    const sunriseDate = new Date(sunriseUniTime * 1000)

    const sunriseTime = sunriseDate.toLocaleTimeString();
    sunrise.textContent = sunriseTime;

    // Sunset
    const sunsetUniTime = data["sys"].sunset;
    const sunsetDate = new Date(sunsetUniTime * 1000)

    const sunsetTime = sunsetDate.toLocaleTimeString();
    sunset.textContent = sunsetTime;

}

// export function displayForecastResults(data, forecast) {

// }
