import { useState } from 'react'
import MainTitle from "./components/MainTitle.jsx";
import Persons from "./components/PersonsSection.jsx";
import FilterByName from "./components/FilterByPersonName.jsx";
import PersonForm from "./components/PersonForm.jsx";




const App = () => {

  const [persons, setPersons] = useState(
      [
          { name: 'Arto Hellas', number: '040-123456', id: 1 },
          { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
          { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
          { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
      ]
  )

  const [newName, setNewName] = useState('')
  const [newNumber , setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

    const addPerson = (event) => {
        event.preventDefault()

        const personObject = {
          name: newName,
          number:newNumber,
            // id: persons.length + 1,
            id: Math.max(...persons.map(person => person.id)) + 1
        }

        if (persons.some((person) => newName === person.name)) {
            alert(`${newName} is already added to phonebook`)
            return
        }else{
            setPersons(persons.concat(personObject))
        }
        setNewName('')
        setNewNumber('')
  }

  const handleNameAdd = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberAdd = (event) => {
      setNewNumber(event.target.value)
  }

  const handleNameFilter = (event) => {
      setNameFilter(event.target.value)
  }

  const personsToShow = !nameFilter
    ? persons
      :persons.filter(person =>
      person.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
  return (
      <div>
        <MainTitle title='Phonebook'/>
        <FilterByName nameFilter={nameFilter} onChange={handleNameFilter} />

        <PersonForm
          newName={newName} newNumber={newNumber} onChangeName={handleNameAdd}
          onChangeNumber={handleNumberAdd} onSubmit={addPerson}/>

        <Persons personsToShow={personsToShow}/>
      </div>
  )
}

export default App
