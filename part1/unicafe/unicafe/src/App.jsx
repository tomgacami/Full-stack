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
    const totalFeeds = feedbackCounter.good + feedbackCounter.neutral + feedbackCounter.bad
    // const averageScore = ((feedbackCounter.good - feedbackCounter.bad)/totalFeeds)
    // const positiveScore = ((feedbackCounter.good * 100)/totalFeeds)

    const averageScore = totalFeeds === 0 ? 0:
        ((feedbackCounter.good - feedbackCounter.bad)/totalFeeds)

    const positiveScore = totalFeeds === 0 ? 0:
        ((feedbackCounter.good * 100)/totalFeeds)

    return(
      <div>
        <p>good {feedbackCounter.good}</p>
        <p>neutral {feedbackCounter.neutral}</p>
        <p>bad {feedbackCounter.bad}</p>
        <p>all {totalFeeds}</p>
        <p>average {averageScore}</p>
        <p>positive {positiveScore} %</p>
      </div>
    )
}

function App() {

    const [feedbackCounter , setFeedback] = useState({good:0, neutral:0,bad:0})

    const addFeedback = (classification) => {
        setFeedback(prev => ({...prev,[classification]: prev[classification] + 1 }))
    }

  return (
      <div>
        <FeedbackTitles title="give feedback"/>
        <Button onClick={() => addFeedback('good')} text="good"/>
        <Button onClick={() => addFeedback('neutral')} text="neutral"/>
        <Button onClick={() => addFeedback('bad')} text="bad"/>
        <FeedbackTitles title="statistics"/>
        <DisplayFeedbackCounters feedbackCounter={feedbackCounter} />
      </div>
  )
}

export default App
