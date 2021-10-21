import React from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import {  like } from '../reducers/anecdoteReducer'
import {showNoti} from "../reducers/notificationReducer"
const AnecdoteList = () => {
  const filter = (useSelector(state => state.filter))
  const anecdotes = ((useSelector(state => state.anecdotes)).sort((a,b) => {return b.votes-a.votes})).filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
  const dispatch = useDispatch()
  
    const vote = (id, content) => { 
      const newAne = anecdotes.find(a => a.id === id)
      dispatch(like(newAne))
      dispatch(showNoti(`You voted "${content}"`, 5))
    }

return (   
  <>
    {anecdotes.map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={(event) => {event.preventDefault(); vote(anecdote.id, anecdote.content)}}>vote</button>
      </div>
    </div>
  )}
  </>
  )
}

export default AnecdoteList