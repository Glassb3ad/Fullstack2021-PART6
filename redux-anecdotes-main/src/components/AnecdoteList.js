import React from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import {  like } from '../reducers/anecdoteReducer'
import {showNoti} from "../reducers/notificationReducer"
const AnecdoteList = () => {
  const filter = (useSelector(state => state.filter))
  const anecdotes = ((useSelector(state => state.anecdotes)).sort((a,b) => {return b.votes-a.votes})).filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
  const dispatch = useDispatch()
  
    const vote = (id, content) => {
      console.log('vote', id)
      dispatch(like(id))
      console.log(content)
      dispatch(showNoti(content))
      setTimeout(() => {dispatch(showNoti(''))}, 5000)
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
        <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
      </div>
    </div>
  )}
  </>
  )
}

export default AnecdoteList