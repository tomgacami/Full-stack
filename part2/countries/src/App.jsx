import {useEffect, useState} from 'react'
import CountryForm from '../src/components/CountryForm.jsx'
import countryServices from './services/countries.js'
import CountryList from "./components/CountryList.jsx";

function App() {

    const [inputCountry, setInputCountry] = useState('')
    const [countriesList, setCountriesList] = useState([])

  const handleCountryChange = (event) =>{
    setInputCountry(event.target.value)
  }

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
      <CountryList countriesToDisplay={countriesToDisplay} inputCountry={inputCountry}/>
    </>
  )
}

export default App
