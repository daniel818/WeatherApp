import axios from 'axios';
const KEY = 'fb25e575db054615a546895ef50beb19';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url =`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request

    };

}