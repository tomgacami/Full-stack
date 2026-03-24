import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([{name: 'Arto Hellas'}])
  const [newName, setNewName] = useState('')
  const [newNumber , setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
          name: newName,
          number:newNumber
        }

        if (persons.some((person) => newName === person.name)) {
            alert(`${newName} is already added to phonebook`)
        }else{
            setPersons(persons.concat(personObject))
        }
        setNewName('')
        setNewNumber('')
  }

  const handleNameAdd = (event) => {
    // console.log('Name event: ', event.target.value)
      setNewName(event.target.value)
  }

  const handleNumberAdd = (event) => {
      // console.log('Number event: ', event.target.value)
      setNewNumber(event.target.value)

  }

  return (
      <div>
        <Title title='Phonebook'/>
        <form onSubmit={addPerson}>
          <div>
            name: <input
              value={newName}
              onChange={handleNameAdd}
          />
          </div>
          <div>
              number: <input
                value={newNumber}
                onChange={handleNumberAdd}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>

        <Title title='Numbers'></Title>
        <div>
          {persons.map(person =>
              <Person key={person.name} person={person}/>
          )}
        </div>
      </div>
  )
}

const Person = ({person}) =>{

  return(
      <div>{person.name} {person.number}</div>
  )
}


const Title = ({title}) => {
  return(
      <h2>{title}</h2>
  )
}

export default App
