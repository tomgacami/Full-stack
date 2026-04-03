import LighterTitle from "./LighterTitle.jsx";
import Person from "./Person.jsx";

const Persons = ({personsToShow, deleteContact} ) => {

    return(
        <div>
            <LighterTitle title='Numbers'></LighterTitle>
            {personsToShow.map(person =>
                <Person key={person.id} person={person} deleteContact={deleteContact} />
            )}
        </div>
    )
}

export default Persons