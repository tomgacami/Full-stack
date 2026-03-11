import { useState } from 'react'

const FeedbackTitles = ({title}) => {
  return (
      <h1>{title}</h1>
  )
}

const Button = ({onClick, text}) =>{
  return(
      <button onClick={onClick}>{text}</button>
  )
}

const DisplayFeedbackCounters = ({feedbackCounter}) => {
  // console.log({feedbackCounter})
  return(
      <div>
        <p>good {feedbackCounter.good}</p>
        <p>neutral {feedbackCounter.neutral}</p>
        <p>bad {feedbackCounter.bad}</p>
      </div>
  )
}



function App() {

  const [feedbackCounter , setFeedback] = useState({good:0, neutral:0,bad:0})

  const addFeedback = (calification) => {
    // console.log(calification)
    setFeedback(prev => ({...prev,[calification]: prev[calification] + 1 }))
    // console.log('After: ',)
  }


  return (
      <div>
        <FeedbackTitles title="give feedback"/>
        <Button onClick={() => addFeedback('good')} text="good"/>
        <Button onClick={() => addFeedback('neutral')} text="neutral"/>
        <Button onClick={() => addFeedback('bad')} text="bad"/>
        <FeedbackTitles title="statistics"/>
        <DisplayFeedbackCounters feedbackCounter={feedbackCounter}/>
      </div>
  )
}

export default App
