import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }

const newAnecdote = async (anecdote) => {
    return (await axios.post(baseUrl, anecdote))
}

const updateAnecdote = async (anecdote) => {
    const address = `${baseUrl}/${anecdote.id}`
    return (await axios.put(address, anecdote))
}

const  anecdoteService = { getAll, newAnecdote, updateAnecdote }
export default anecdoteService