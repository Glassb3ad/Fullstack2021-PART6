import React from 'react'
import { useDispatch } from 'react-redux'
import {  addAn } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdoteService'
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    
    const addAnecdote = async (event) =>{ 
    event.preventDefault() 
    const anecdote = asObject(event.target.anecdote.value)
    console.log(anecdote)
    dispatch(addAn(anecdote))
    await anecdoteService.newAnecdote(anecdote)  
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
