
const Country  = ({countryData}) => {

    if (!countryData){
        return null
    }

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
        </div>


    )
}
export default Country