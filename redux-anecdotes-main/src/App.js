import React, {useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import ConnectedNotification from './components/Notification'
import ConnectedFilter from './components/Filter'
import { useDispatch } from 'react-redux'
import { init } from './reducers/anecdoteReducer'
const App = () => {
  const dispatch = useDispatch() 
  
  useEffect(() => {
    dispatch(init())
  }, [dispatch])
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <ConnectedFilter/>
      <ConnectedNotification/>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App