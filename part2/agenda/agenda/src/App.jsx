import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([{name: 'Arto Hellas'}])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }

    if (persons.some((person) => newName === person.name)) {
        alert(`${newName} is already added to phonebook`)
    }else{
        setPersons(persons.concat(personObject))
    }
    setNewName('')
  }

  const handlePersonAdd = (event) => {
    setNewName(event.target.value)
  }

  return (
      <div>
        <Title title='Phonebook'/>
        <form onSubmit={addName}>
          <div>
            name: <input
              value={newName}
              onChange={handlePersonAdd}

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
      <div>{person.name}</div>
  )
}


const Title = ({title}) => {
  return(
      <h2>{title}</h2>
  )
}

export default App
