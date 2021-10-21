import anecdoteService from "../services/anecdoteService"
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  if(action.type === "LIKE") {
    return state.map(a => {return (a.id !== action.data.id ? a : action.data)})
  }
  if(action.type === 'ADD'){
    return state.concat(action.data)
  }
  if (action.type === 'INIT') return action.data  
  return state
}

export const like = (anecdote) => {
  return async dispatch => {
  const votesIncreased = {...anecdote, votes : anecdote.votes + 1}
  await anecdoteService.updateAnecdote(votesIncreased)
  dispatch({
    type: "LIKE",
    data: votesIncreased
  })
 }
}

export const addAn = function (content) {
  return  async (dispatch) => {
    const anecdote = asObject(content)
    await anecdoteService.newAnecdote(anecdote)
    dispatch({
      type: 'ADD',
      data: anecdote
    })
  }
}
export const init = function (anecdotes) {
  return async dispatch => { 
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type : "INIT",
      data: anecdotes
    })
 }
}

export default reducer

