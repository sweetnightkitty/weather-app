async function getWeatherData() {
    const key = "J6RNZHK3MQPDM4ZLZM7NWR9N7";
    const local = "Seoul";
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + local + "?key=" + key;

    try {
        const rawData = await fetch(url, { mode: "cors"}).then(function(response) { return response.json()});
        console.log(processData(rawData));

    } catch(error) {
        console.log("error");
    }
}

getWeatherData();

function processData(rawData) {
    return {
        location: rawData.address,
        currentTemp: rawData.currentConditions.temp,
        currentConditions: rawData.currentConditions.conditions,
        currentIcon: rawData.currentConditions.icon,
        feelsLike: rawData.currentConditions.feelslike,
        uvindex: rawData.currentConditions.uvindex,
        currentTime: rawData.currentConditions.datetime,
        sunrise: rawData.currentConditions.sunrise,
        sunset: rawData.currentConditions.sunset,
        todayHigh: rawData.days[0].tempmax,
        todayLow: rawData.days[0].tempmin,
    }
}
