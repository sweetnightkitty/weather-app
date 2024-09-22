export function processData(rawData) {
    //Converts temps from F to C
    const currentTemp = convertTemp(rawData.currentConditions.temp);
    const todayHigh = convertTemp(rawData.days[0].tempmax);
    const todayLow = convertTemp(rawData.days[0].tempmin);
    const feelsLike = convertTemp(rawData.currentConditions.feelslike);

    //Remove seconds and stores time as HH:MM
    const currentTime = convertTime(rawData.currentConditions.datetime);
    const sunrise = convertTime(rawData.currentConditions.sunrise);
    const sunset = convertTime(rawData.currentConditions.sunset);

    return {
        location: rawData.address,
        currentTemp: currentTemp,
        currentConditions: rawData.currentConditions.conditions,
        currentIcon: rawData.currentConditions.icon,
        feelsLike: feelsLike,
        uvindex: rawData.currentConditions.uvindex,
        currentTime: currentTime,
        sunrise: sunrise,
        sunset: sunset,
        todayHigh: todayHigh,
        todayLow: todayLow,
    }
}

// Converts from F to C
function convertTemp(fahrenheit) {
    return (Math.floor((fahrenheit - 32) * 5 / 9)) + "&#176;C";

}

//Removes the seconds from time
function convertTime(time) {
    return time.slice(0, -3);
}