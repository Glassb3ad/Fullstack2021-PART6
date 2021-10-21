import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers/anecdoteReducer'
import { notificationReducer } from './reducers/notificationReducer'
import { filterReducer } from './reducers/filterReducer'
import thunk from 'redux-thunk'

const finalReducer = combineReducers({
    notification : notificationReducer,
    anecdotes : reducer,
    filter: filterReducer
})

const store = createStore(finalReducer, composeWithDevTools( applyMiddleware(thunk)))

export default store
