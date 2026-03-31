import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import axios from "axios";


// const promise = axios.get('http://localhost:3001/persons')
// promise.then(res => {
//     console.log('Presponse: ', res)
//     console.log('Promise: ', promise)
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



