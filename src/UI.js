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
    location.textContent = data.location;
    currentTemp.innerHTML = data.currentTemp;
    currentConditions.textContent = data.currentConditions;
    todayHigh.innerHTML = "H: " + data.todayHigh;
    todayLow.innerHTML = "L:" + data.todayLow;
    currentTime.textContent = "Current TIme: " + data.currentTime;
    feelsLike.innerHTML = data.feelsLike;
    uvindex.innerHTML = data.uvindex;
    sunrise.textContent = data.sunrise;
    sunset.textContent = data.sunset;
}