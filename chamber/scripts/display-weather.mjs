import { usTimeConversion } from "./time-conversion.mjs";
import { usDateConversion } from "./time-conversion.mjs";

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
    unit.forEach(unit => {


        if (country === "US") {
            unit.textContent = "°F"
        }
        else {
            unit.textContent = "°C"
        }
    });

    // Fig Caption & Capitalization
    const description = data.weather[0].description;
    function capitalizeFirstLetter(word) {
        if (word.length === 0) {
            return ""
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    const capitalizedDescription = capitalizeFirstLetter(description);
    figCaption.textContent = capitalizedDescription;

    // High
    high.textContent = Math.ceil(data.main.temp_max);

    // Low
    low.textContent = Math.ceil(data.main.temp_min);

    // Humidity
    humidity.textContent = data.main.humidity;

    // Sunrise
    const sunriseUniTime = data["sys"].sunrise;
    sunrise.textContent = usTimeConversion(sunriseUniTime);

    // Sunset
    const sunsetUniTime = data["sys"].sunset;
    sunset.textContent = usTimeConversion(sunsetUniTime);

}


export function displayForecastResults(
    data,
    {
        forecastDate1,
        forecastDate2,
        forecastDate3,

        forecastDay1,
        forecastDay2,
        forecastDay3,

        descriptionDay1,
        descriptionDay2,
        descriptionDay3
    }
) {
    forecastDate1.textContent = `${usDateConversion(data.list[3].dt)} ${usTimeConversion(data.list[3].dt)}`;
    forecastDay1.textContent = Math.ceil(data.list[3].main.temp);
    descriptionDay1.textContent = data.list[3].weather[0].description;

    forecastDate2.textContent = `${usDateConversion(data.list[11].dt)} ${usTimeConversion(data.list[11].dt)}`;
    forecastDay2.textContent = Math.ceil(data.list[11].main.temp);
    descriptionDay2.textContent = data.list[11].weather[0].description

    forecastDate3.textContent = `${usDateConversion(data.list[19].dt)} ${usTimeConversion(data.list[19].dt)}`;
    forecastDay3.textContent = Math.ceil(data.list[19].main.temp);
    descriptionDay3.textContent = data.list[19].weather[0].description

}
