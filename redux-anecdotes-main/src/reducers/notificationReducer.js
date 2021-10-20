

export const notificationReducer = (state = "tsuppaa", action) => {
    if(action.type === 'SHOW') return action.content 
    return state
}

export const showNoti = (content) => {
    return {
        type: 'SHOW',
        content: content
    }
}

