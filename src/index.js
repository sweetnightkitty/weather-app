import "./styles.css";
import { processData } from "./weatherData.js";
import { renderUI } from "./UI.js";

const searchBar = document.querySelector("input");
const searchBtn = document.querySelector("button");
let local = "seoul";
const defaultUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + local + "?key=J6RNZHK3MQPDM4ZLZM7NWR9N7";

fetch(defaultUrl, { mode: "cors"})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    return processData(response);
})
.then(function(response) {
    renderUI(response);
})

searchBtn.addEventListener("click", ()=> {
    local = searchBar.value;
    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + local + "?key=J6RNZHK3MQPDM4ZLZM7NWR9N7";
    
    fetch(url, { mode: "cors"})
    .then(function(response) { 
        return response.json();
    })
    .then(function(response) {
        return processData(response);
    })
    .then(function(response) {
        renderUI(response);
        searchBar.value = "";
    })
})


