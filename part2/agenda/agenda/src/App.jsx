import {useEffect, useState} from 'react'
import MainTitle from "./components/MainTitle.jsx";
import Persons from "./components/PersonsSection.jsx";
import FilterByName from "./components/FilterByPersonName.jsx";
import PersonForm from "./components/PersonForm.jsx";
import personService from './services/persons.js'
import person from "./components/Person.jsx";

const App = () => {

  const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber , setNewNumber] = useState('')
    const [nameFilter, setNameFilter] = useState('')

    useEffect(() => {
        personService
            .getAll()
            .then((res) => {
                setPersons(res)
            })
    }, [])


    const addPerson = (event) => {
        event.preventDefault()

        const personObject = {
          name: newName,
          number:newNumber,
            id: Math.max(...persons.map(person => person.id)) + 1
        }

        if (persons.some((person) => newName === person.name)) {

            const pep = persons.find(person => person.name === personObject.name)
            console.log('Person object: ', personObject.name, personObject.number)
            console.log('Pep : ', {pep})

            if (pep.number === personObject.number) {
                alert(`${newName} is already added to phonebook`)
                return

            } else if (pep.number !== personObject.number) {
                console.log('Entro en el if')
                const confirm = window.confirm(`${pep.name} is already added to phonebook, remplace the old number with a new one?`)
                console.log(confirm)
                if (confirm) {
                    console.log('Entro en el confirm')
                    const changedContact = {...pep, number: newNumber}
                    personService
                        .updateContact(pep.id, changedContact)
                        .then( returnedContact =>{
                            setPersons(persons.map(person => person.name !== pep.name ? person : returnedContact ))
                            // setPersons(personService.getAll)
                            console.log(persons)
                        })
                }
            }
            console.log('Salio del if')


        }else{
            personService
                .create(personObject)
                .then (response => {
                    setPersons(persons.concat(response))
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

  const deleteContact = (id, name) => {
      const confirm = window.confirm(`Delete ${name} ?`)
      if (confirm) {
          personService.deleteContact(id)
              .then(() => {
                  setPersons(prev => prev.filter(person => person.id !== id))
              })
      }
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

        <Persons personsToShow={personsToShow} deleteContact={deleteContact} />
      </div>
  )
}

export default App
