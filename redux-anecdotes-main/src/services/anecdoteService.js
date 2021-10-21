import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }

const newAnecdote = async (anecdote) => {
    return (await axios.post(baseUrl, anecdote))
}

const  anecdoteService = { getAll, newAnecdote }
export default anecdoteService