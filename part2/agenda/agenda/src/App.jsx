import {useEffect, useState} from 'react'
import MainTitle from "./components/MainTitle.jsx";
import Persons from "./components/PersonsSection.jsx";
import FilterByName from "./components/FilterByPersonName.jsx";
import PersonForm from "./components/PersonForm.jsx";
import personService from './services/persons.js'
import Notification from "./components/Notification.jsx";

const App = () => {

  const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber , setNewNumber] = useState('')
    const [nameFilter, setNameFilter] = useState('')
    const [notification, setNotification] = useState(null)

    useEffect(() => {
        personService
            .getAll()
            .then((res) => {
                setPersons(res)
            })
    }, [])

    const displayNotification = (message, type) =>{
      setNotification({message, type})
        setTimeout(() =>{
            setNotification(null)
        },5000)
    }

    const addPerson = (event) => {
        event.preventDefault()

        const personObject = {
          name: newName,
          number:newNumber,
        }

        if (persons.some((person) => newName === person.name)) {

            const pep = persons.find(person => person.name === personObject.name)

            if (pep.number === personObject.number) {
                alert(`${newName} is already added to phonebook`)
                return

            } else {
                const confirmUpdate = window.confirm(`${pep.name} is already added to phonebook, replace the old number with a new one?`)
                if (confirmUpdate) {
                    const changedContact = {...pep, number: newNumber}
                    personService
                        .updateContact(pep.id, changedContact)
                        .then( returnedContact =>{
                            setPersons(persons.map(person => person.name !== pep.name ? person : returnedContact ))
                            displayNotification(`${pep.name} updated successfully`,'success')
                            setNewName('')
                            setNewNumber('')
                        })
                        .catch( error => {
                            displayNotification(`Information of ${pep.name} has already been removed from server`,'error')
                        })
                }
            }
        }else{
            personService
                .create(personObject)
                .then (response => {
                    setPersons(persons.concat(response))
                    displayNotification(`Added ${personObject.name}`,'success')
                    setNewName('')
                    setNewNumber('')
                })
                .catch(error => {
                    alert(
                        'An error occurred creating contact'
                    )
                })

        }
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
              .catch(error => {
                  alert(
                      'An error occurred deleting contact'
                  )
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
          <Notification notification={notification} />
        <FilterByName nameFilter={nameFilter} onChange={handleNameFilter} />

        <PersonForm
          newName={newName} newNumber={newNumber} onChangeName={handleNameAdd}
          onChangeNumber={handleNumberAdd} onSubmit={addPerson}/>

        <Persons personsToShow={personsToShow} deleteContact={deleteContact} />
      </div>
  )
}

export default App
