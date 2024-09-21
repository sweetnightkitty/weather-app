import "./styles.css";
import { processData } from "./weatherData.js";
import { renderUI } from "./UI.js";

const key = "J6RNZHK3MQPDM4ZLZM7NWR9N7";
const local = "Seoul";
const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + local + "?key=" + key;


fetch(url, { mode: "cors"})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    return processData(response);
})
.then(function(response) {
    renderUI(response);
})