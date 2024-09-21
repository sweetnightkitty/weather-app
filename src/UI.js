const location = document.querySelector(".location");
const currentTemp = document.querySelector(".currentTemp");
const currentConditions = document.querySelector(".currentConditions");
const todayHigh = document.querySelector(".todayHigh");
const todayLow = document.querySelector(".todayLow");
const currentTime = document.querySelector(".currentTime");
const feelsLike = document.querySelector(".feelsLike");
const uvindex = document.querySelector(".uvindex");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");

export function renderUI(data) {
    location.textContent = "City: " + data.location;
    currentTemp.textContent = "Current Temp: " + data.currentTemp;
    currentConditions.textContent = "Current Conditions: " + data.currentConditions;
    todayHigh.textContent = "Today's High: " + data.todayHigh;
    todayLow.textContent = "Today's Low: " + data.todayLow;
    currentTime.textContent = "Current TIme: " + data.currentTime;
    feelsLike.textContent = "Feels like: " + data.feelsLike;
    uvindex.textContent = "UV index: " + data.uvindex;
    sunrise.textContent = "Sunrise: " + data.sunrise;
    sunset.textContent = "Sunset: " + data.sunset;
}