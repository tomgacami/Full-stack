import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
    const request =
        axios
            .get(baseUrl)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request =
        axios
            .post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const deleteContact = (id) => {

    const contactUrl = baseUrl + '/' + id
    return axios
        .delete(contactUrl)
}

const updateContact = (id, newNumber) => {
    const request =
        axios
            .put(`${baseUrl}/${id}`, newNumber)
    return request.then(response => response.data)
}

export default {
    getAll, create, deleteContact, updateContact
}