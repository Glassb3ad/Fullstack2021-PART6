

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  if(action.type === "LIKE") {
    const ob = state.find(a=> a.id === action.id)
    return state.map(a => {return (a.id !== action.id ? a : {...ob, votes : (ob.votes +1)})})
  }
  if(action.type === 'ADD'){
    return state.concat(action.data)
  }
  if (action.type === 'INIT') return action.data  
  return state
}

export const like = (id) => {
  return {
    type: "LIKE",
    id: id
  }
}

export const addAn = function (content) {
  return {
    type: 'ADD',
    data: content
  }
}
export const init = function (anecdotes) {
  return {
    type : "INIT",
    data: anecdotes
  }
}

export default reducer

