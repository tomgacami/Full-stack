import axios from "axios";
const weather_api_key = import.meta.env.VITE_SOME_KEY_OPEN_WEATHER

const getCityWeather = (lat, lon) =>{

const baseUrl =
    'https://api.openweathermap.org/data/2.5/weather?lat=' + `${lat}`+ '&lon=' + `${lon}` + '&appid=' + `${weather_api_key}`

    return axios
            .get(baseUrl)
            .then(res => res.data)
}
export default {
    getCityWeather
}