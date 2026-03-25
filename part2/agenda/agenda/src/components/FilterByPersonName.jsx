
const FilterByName = ({nameFilter, onChange }) => {

    return (
        <div>
            filter show with <input value={nameFilter} onChange={onChange} />
        </div>
    )
}

export default FilterByName