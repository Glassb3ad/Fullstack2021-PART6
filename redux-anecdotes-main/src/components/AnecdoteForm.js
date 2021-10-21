import React from 'react'
import { connect } from 'react-redux'
import {  addAn } from '../reducers/anecdoteReducer'
import {showNoti} from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {
    const addAnecdote = (event) =>{ 
    event.preventDefault() 
    props.addAn(event.target.anecdote.value)  
    props.showNoti(`You added "${event.target.anecdote.value}"`, 5)
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

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
    anecdotes: state.anecdotes
  }
}
const mapDispatchToProps = {
  addAn, showNoti
}


const ConnectedForm = connect(mapStateToProps,mapDispatchToProps)(AnecdoteForm)
export default ConnectedForm
