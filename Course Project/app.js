import * as ELEMENTS from "elements.js";
import { Http } from "http.js";

const APP_ID = '';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener("click", searchWeather);

function searchWeather() {
  const CITY_NAME = ELEMENTS.ELEMENT_SEARCH_CITY.value.trim();
  if (CITY_NAME.length == 0) {
    return alert("Please enter a city name");
  }
  const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid=' + APP_ID;

  Http.fetchData(URL)
    .then(responseData => {
        
    })
  .catch(error => alert(error));
}