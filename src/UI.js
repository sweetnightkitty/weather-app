

import clearday from "./icons/clear-day.svg";
import clearnight from "./icons/clear-night.svg";
import cloudy from "./icons/cloudy.svg";
import fog from "./icons/fog.svg";
import hail from "./icons/hail.svg";
import partlycloudyday from "./icons/partly-cloudy-day.svg";
import partlycloudynight from "./icons/partly-cloudy-night.svg";
import rainsnowshowersday from "./icons/rain-snow-showers-day.svg";
import rainsnowshowersnight from "./icons/rain-snow-showers-night.svg";
import rainsnow from "./icons/rain-snow.svg";
import rain from "./icons/rain.svg";
import showersday from "./icons/showers-day.svg";
import showersnight from "./icons/showers-night.svg";
import sleet from "./icons/sleet.svg";
import snowshowersday from "./icons/snow-showers-day.svg";
import snowshowersnight from "./icons/snow-showers-night.svg";
import snow from "./icons/snow.svg";
import thunderrain from "./icons/thunder-rain.svg";
import thundershowersday from "./icons/thunder-showers-day.svg";
import thundershowersnight from "./icons/thunder-showers-night.svg";
import thunder from "./icons/thunder.svg";
import wind from "./icons/wind.svg";

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

const hourly = document.querySelector(".hourly");



export function renderUI(data) {
    hourly.innerHTML = "";

    data.hourly.forEach((hour) => {
        if(hour.datetime.slice(0, -3) == data.currentTime.slice(0, -3)) {
            const datetime = createDiv("Now");
            const temp = createDiv(hour.temp);

            const formatIcon = (hour.icon).replace(/-/g,"");
            const icon = renderIcons(formatIcon);

            const hourDiv = createDiv("");
            hourDiv.classList.add("hour");

            hourDiv.appendChild(datetime);
            hourDiv.appendChild(icon);
            hourDiv.appendChild(temp);

            hourly.appendChild(hourDiv);
            
        } else if(hour.datetime.slice(0, -3) > data.currentTime.slice(0, -3)) {
            const datetime = createDiv(hour.datetime);
            const temp = createDiv(hour.temp + "&#176;C");

            const formatIcon = (hour.icon).replace(/-/g,"");
            const icon = renderIcons(formatIcon);

            const hourDiv = createDiv("");
            hourDiv.classList.add("hour");

            hourDiv.appendChild(datetime);
            hourDiv.appendChild(icon);
            hourDiv.appendChild(temp);

            hourly.appendChild(hourDiv);


        }
    })

    location.textContent = data.location;
    currentTemp.innerHTML = data.currentTemp + "&#176;C";
    currentConditions.textContent = data.currentConditions;
    todayHigh.innerHTML = "H: " + data.todayHigh + "&#176;C";
    todayLow.innerHTML = "L:" + data.todayLow + "&#176;C";
    feelsLike.innerHTML = data.feelsLike + "&#176;C";
    uvindex.innerHTML = data.uvindex;
    sunrise.textContent = data.sunrise;
    sunset.textContent = data.sunset;
}

function createDiv(text) {
    const div = document.createElement("div");
    div.innerHTML = text;
    return div;
}

function renderIcons(icon) {

    const icons = [
        {
            icon: "clearnight",
            image: clearnight,
        },
        {
            icon: "clearday",
            image: clearday,
        },
        {
            icon: "cloudy",
            image: cloudy,
        },
        {
            icon: "fog",
            image: fog,
        },
        {
            icon: "partlycloudyday",
            image: partlycloudyday,
        },
        {
            icon: "hail",
            image: hail,
        },
        {
            icon: "partlycloudynight",
            image: partlycloudynight,
        },
        {
            icon: "rainsnowshowersday",
            image: rainsnowshowersday,
        },
        {
            icon: "rainsnowshowersnight",
            image: rainsnowshowersnight,
        },
        {
            icon: "rainsnow",
            image: rainsnow,
        },
        {
            icon: "rain",
            image: rain,
        },
        {
            icon: "showersday",
            image: showersday,
        },
        {
            icon: "showersnight",
            image: showersnight,
        },
        {
            icon: "sleet",
            image: sleet,
        },
        {
            icon: "snowshowersday",
            image: snowshowersday,
        },
        {
            icon: "snowshowersnight",
            image: snowshowersnight,
        },
        {
            icon: "snow",
            image: snow,
        },
        {
            icon: "thunderrain",
            image: thunderrain,
        },
        { 
            icon: "thundershowersday",
            image: thundershowersday,
        },
        {
            icon: "thundershowersnight",
            image: thundershowersnight,
        },
        {
            icon: "thunder",
            image: thunder,
        },
        {
            icon: "wind",
            image: wind,
        },
    ];
    
    for(let i = 0; i < icons.length; i++) {
        const img = document.createElement("img");
        if(icons[i].icon == icon) {
            img.src = icons[i].image;
            return img;
        }
    }
}
