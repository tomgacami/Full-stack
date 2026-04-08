import {useEffect, useState} from 'react'
import CountryForm from '../src/components/CountryForm.jsx'
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

  useEffect(() => {

      if (selectedCountry ) {
          const lat = selectedCountry.capitalInfo.latlng.toString().split(",")[0]
          const lon = selectedCountry.capitalInfo.latlng.toString().split(",")[1]

          weatherServices
              .getCityWeather(lat, lon)
              .then(response => {
                  setCityWeather(response)
              })
        }
  }, [selectedCountry])

  useEffect(() =>{
    countryServices
        .getAll()
        .then(response => {
          setCountriesList(response)
        })

  }, [])

  const countriesToDisplay =!inputCountry
  ? countriesList
      : countriesList.filter(country =>
          country.name.common.toLowerCase().includes(inputCountry.toLowerCase())
      )

  return (
    <>
      <CountryForm
          inputCountry={inputCountry}
          onChange={handleCountryChange}/>
      <CountryList countriesToDisplay={countriesToDisplay} inputCountry={inputCountry}
                   setSelectedCountry={setSelectedCountry} cityWeather={cityWeather}/>
        {selectedCountry && <Country countryData={selectedCountry} cityWeather={cityWeather} />}
    </>
  )
}

export default App
