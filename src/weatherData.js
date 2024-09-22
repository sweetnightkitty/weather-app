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

    //Ensures the first letter of the location starts with an Upper Case in the UI
    const location = capitalize(rawData.address);

    //Logs hourly weather info
    const hours = rawData.days[0].hours;
    const hourly = [];
    hours.forEach((hour) => {
        const datetime = convertTime(hour.datetime);
        const icon = hour.icon;
        const temp = convertTemp(hour.temp);

        const object = {
            datetime: datetime,
            icon: icon,
            temp: temp,
        };

        
        hourly.push(object);
        console.log(hourly.length);
    })

    return {
        location: location,
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
        hourly: hourly,
    }
}

// Converts from F to C
function convertTemp(fahrenheit) {
    return (Math.floor((fahrenheit - 32) * 5 / 9));

}

//Removes the seconds from time
function convertTime(time) {
    return time.slice(0, -3);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}