import {useEffect, useState} from 'react'
import MainTitle from "./components/MainTitle.jsx";
import Persons from "./components/PersonsSection.jsx";
import FilterByName from "./components/FilterByPersonName.jsx";
import PersonForm from "./components/PersonForm.jsx";
import axios from "axios";

const App = () => {

  const [persons, setPersons] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then((res) => {
                setPersons(res.data)
            })
    }, [])


  const [newName, setNewName] = useState('')
  const [newNumber , setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

    const addPerson = (event) => {
        event.preventDefault()

        const personObject = {
          name: newName,
          number:newNumber,
            id: Math.max(...persons.map(person => person.id)) + 1
        }

        if (persons.some((person) => newName === person.name)) {
            alert(`${newName} is already added to phonebook`)
            return
        }else{
            axios
                .post('http://localhost:3001/persons', personObject)
                .then (response => {
                    setPersons(persons.concat(response.data))
                })

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
