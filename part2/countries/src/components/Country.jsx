
const Country  = ({countryData, cityWeather}) => {

    if (!countryData || !cityWeather) {
        return <div>Loading weather...</div>
    }

    const iconUrlWeather = `https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`

    return (
        <div>
            <h1>{countryData.name.common}</h1>
            <div>Capital {countryData.capital?.join(', ')}</div>
            <div>Area {countryData.area}</div>

            <h2>Languages</h2>
            <ul>
                {Object.values(countryData.languages ?? {}).map( lang => (
                    <li key={lang}>{lang}</li>
                ))}
            </ul>
            <img src={countryData.flags.png} alt={countryData.flags.alt}/>
            <h2>Weather in {countryData.capital[0]}</h2>
            <p>Temperature {(cityWeather.main.temp - 273.15).toFixed(2)} Celsius</p>
            <img src={iconUrlWeather} alt="weather icon"/>
            <p>Wind {cityWeather.wind.speed} m/s</p>
        </div>
    )
}
export default Country