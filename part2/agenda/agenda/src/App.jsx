import { useState } from 'react'

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
            id: persons.length + 1
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

  const handleNameFilter = (event) => {
      // console.log(event.target.value)
      setNameFilter(event.target.value)
      // const nameFilterPerson = persons.filter(function(person) {
      //     return person.name.toLowerCase().includes(nameFilter.toLowerCase()) || person.name.toUpperCase().includes(nameFilter.toUpperCase())
      // })
      // console.log('Nombre filtrado: ', nameFilter)
      // console.log('Filter: ', nameFilterPerson)
  }

  const personsToShow = !nameFilter
    ? persons
      :persons.filter(person =>
      person.name.toLowerCase().includes(nameFilter.toLowerCase())
      )

  return (
      <div>
        <Title title='Phonebook'/>
          <div>
              filter show with <input value={nameFilter}
                                      onChange={handleNameFilter}/>
          </div>
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
        {/*  <div>*/}
        {/*      {persons.filter(person =>{*/}
        {/*          if (!nameFilter) return true*/}
        {/*          if (person.name.toLowerCase().includes(nameFilter.toLowerCase())*/}
        {/*              // || person.name.toUpperCase().includes(nameFilter.toUpperCase())*/}
        {/*          )*/}
        {/*          {*/}
        {/*              return true*/}
        {/*          }*/}
        {/*      })*/}
        {/*          .map(person => (*/}
        {/*          <Person key={person.key} person={person}/>*/}
        {/*          ))}*/}
        {/*</div>*/}
          <div>
              {personsToShow.map(person =>
                  <Person key={person.id} person={person}/>
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
