export const filterReducer = (state = "", action) => {
    if(action.type === 'NEW') return action.content 
    return state
}

export const addFilter = (content) => {
    return {
        type: 'NEW',
        content: content
    }
}