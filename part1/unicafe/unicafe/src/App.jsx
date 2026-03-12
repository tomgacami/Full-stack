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

const StatisticLine = ({text, value}) => {
    return(
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
    )
}
const Statistics = ({feedbackCounter}) => {

    const totalFeeds = feedbackCounter.good + feedbackCounter.neutral + feedbackCounter.bad

    const averageScore = totalFeeds === 0 ? 0:
        ((feedbackCounter.good - feedbackCounter.bad)/totalFeeds)

    const positiveScore = totalFeeds === 0 ? 0:
        ((feedbackCounter.good * 100)/totalFeeds)

    if ( totalFeeds === 0 ){
        return(
            <p>No feedback given</p>
        )
    }
    else {
        return(
            <table>
                <tbody>
                <StatisticLine text="good" value={feedbackCounter.good} />
                <StatisticLine text="neutral" value={feedbackCounter.neutral} />
                <StatisticLine text="bad" value={feedbackCounter.bad} />
                <StatisticLine text="all" value={totalFeeds} />
                <StatisticLine text="average" value={averageScore} />
                <StatisticLine text="positive" value={positiveScore  + " %"}/>
                </tbody>
            </table>
        )
    }
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
        <Statistics feedbackCounter={feedbackCounter} />
      </div>
  )
}

export default App
