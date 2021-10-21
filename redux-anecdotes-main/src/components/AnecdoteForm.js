import React from 'react'
import { useDispatch } from 'react-redux'
import {  addAn } from '../reducers/anecdoteReducer'
import {showNoti} from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    
    const addAnecdote = (event) =>{ 
    event.preventDefault() 
    dispatch(addAn(event.target.anecdote.value))  
    dispatch(showNoti(`You added "${event.target.anecdote.value}"`, 5))
    event.target.anecdote.value = ''
    }

    return(
    <>
    <h2>create new</h2>
      <form onSubmit = {addAnecdote}>
        <div><input name = "anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </>
    )

}

export default AnecdoteForm
