
const CountryForm = ({countryName, onChange}) =>{

    return(
        <div>
            find countries <input
            value={countryName}
            onChange={onChange}/>
        </div>
    )
}

export default CountryForm