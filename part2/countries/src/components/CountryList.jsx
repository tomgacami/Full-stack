import Country from "./Country.jsx";

const CountryList = ({countriesToDisplay, inputCountry}) => {

    if (!inputCountry){
        return null
    }
        if (countriesToDisplay.length > 10) {
            return(
                <div>Too many matches, specify another filter</div>
            )
        } else if (countriesToDisplay.length > 1) {
            return(
                countriesToDisplay.map(country =>
                <div key={country.name.common}>{country.name.common}</div> )
            )
        } else {
            return (
                <Country countryData={countriesToDisplay[0]}/>
            )
        }
}

export default CountryList