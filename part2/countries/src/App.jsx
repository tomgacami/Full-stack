import {useEffect, useState} from 'react'
import CountryForm from "./components/CountryForm.jsx";
import CountryList from "./components/CountryList.jsx";
import Country from "./components/Country.jsx";
import countryServices from './services/countries.js'
import weatherServices from './services/weather.js'

function App() {

    const [inputCountry, setInputCountry] = useState('')
    const [countriesList, setCountriesList] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [cityWeather, setCityWeather] = useState(null)

  const handleCountryChange = (event) =>{
    setInputCountry(event.target.value)
      setSelectedCountry(null)
  }

    const countriesToDisplay =!inputCountry
        ? countriesList
        : countriesList.filter(country =>
            country.name.common.toLowerCase().includes(inputCountry.toLowerCase())
        )

    const autoSelectedCountry = countriesToDisplay.length === 1 ? countriesToDisplay[0] : selectedCountry


    useEffect(() => {

      if (autoSelectedCountry ) {
          const lat = autoSelectedCountry.capitalInfo.latlng.toString().split(",")[0]
          const lon = autoSelectedCountry.capitalInfo.latlng.toString().split(",")[1]

          weatherServices
              .getCityWeather(lat, lon)
              .then(response => {
                  setCityWeather(response)
              })
        }
  }, [autoSelectedCountry])

  useEffect(() =>{
    countryServices
        .getAll()
        .then(response => {
          setCountriesList(response)
        })

  }, [])

    return (
    <>
      <CountryForm
          inputCountry={inputCountry}
          onChange={handleCountryChange}/>
      <CountryList countriesToDisplay={countriesToDisplay} inputCountry={inputCountry}
                   setSelectedCountry={setSelectedCountry} cityWeather={cityWeather}/>
        {autoSelectedCountry && <Country countryData={autoSelectedCountry} cityWeather={cityWeather} />}
    </>
  )
}

export default App
