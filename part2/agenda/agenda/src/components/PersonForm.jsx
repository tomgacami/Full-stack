import LighterTitle from "./LighterTitle.jsx";

const PersonForm = ({newName,newNumber, onChangeName, onChangeNumber, onSubmit}) => {

    return(
        <div>
            <LighterTitle title="add a new"/>
            <form onSubmit={onSubmit}>
                <div>
                    name: <input
                    value={newName}
                    onChange={onChangeName}
                />
                </div>
                <div>
                    number: <input
                    value={newNumber}
                    onChange={onChangeNumber}
                />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm