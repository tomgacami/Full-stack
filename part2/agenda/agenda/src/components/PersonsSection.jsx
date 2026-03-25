import LighterTitle from "./LighterTitle.jsx";
import Person from "./Person.jsx";

const Persons = ({personsToShow}) => {

    return(
        <div>
            <LighterTitle title='Numbers'></LighterTitle>
            {personsToShow.map(person =>
                <Person key={person.id} person={person}/>
            )}
        </div>
    )
}

export default Persons