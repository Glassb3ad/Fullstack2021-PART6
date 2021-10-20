import React from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import {  addAn } from '../reducers/anecdoteReducer'


const AnecdoteForm = () => {
    const dispatch = useDispatch()
    
    const addAnecdote = (event) =>{ 
    event.preventDefault() 
   console.log(event.target.anecdote.value)
    dispatch(addAn(event.target.anecdote.value))
    event.target.anecdote.value = ''}
   
    
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
