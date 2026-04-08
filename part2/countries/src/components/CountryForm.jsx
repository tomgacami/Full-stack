
const CountryForm = ({inputCountry, onChange}) =>{

    return(
        <div>
            find countries <input
            value={inputCountry}
            onChange={onChange}/>
        </div>
    )
}

export default CountryForm