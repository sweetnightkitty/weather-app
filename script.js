const key = "J6RNZHK3MQPDM4ZLZM7NWR9N7";
let local = "Seoul";

const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + local + "?key=" + key;

fetch(url, {mode: "cors"})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(err) {
        console.log("error");
    })