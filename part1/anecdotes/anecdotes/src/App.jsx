import { useState } from 'react'

const Anecdote = ({anecdote}) => {
  return(
      <p>{anecdote}</p>
  )
}

const Title = ({title}) => {
  return(
      <h1>{title}</h1>
  )
}

const Button = ({onClick, text}) => {
  return(
      <button onClick={onClick}>{text}</button>
  )
}

const AnecdoteMostVoted = ({votes, anecdotes}) => {

  const mostVoted = Math.max(...votes)

    if (mostVoted > 0){
        let maxIndex = 0

        for (let index= 0; index < votes.length; index++ ) {
                if (votes[index] > votes[maxIndex]){
                    maxIndex=index
                }
        }
        return(
            <div>
                <Anecdote anecdote={anecdotes[maxIndex]}/>
                <p>{"has " + mostVoted + " votes"}</p>
            </div>
        )
    } else {
        return (
            <p>No votes yet</p>
        )
    }
}

function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)

  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  // const [mostVotes, setMostvoted] = useState(anecdotes.length)

  const setAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteFor = (anecdoteVoted)=>{
    const copy = [...votes]
    copy[anecdoteVoted] += 1
    setVote(copy)
  }

  return (
      <div>
        <Title title="Anecdote of the day"/>
        <Anecdote anecdote={anecdotes[selected]}/>
        <Button onClick={setAnecdote} text="next anecdote"/>
        <Button onClick={()=>voteFor(selected)} text="vote" />
        <Title title="Anecdote with most votes"/>
        <AnecdoteMostVoted votes={votes} anecdotes={anecdotes}/>
      </div>
  )
}

export default App
