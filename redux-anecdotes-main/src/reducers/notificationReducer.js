

export const notificationReducer = (state = null, action) => {
    if(action.type === 'SHOW') return action.content 
    return state
}

export const showNoti = (content, time) => {
    console.log(content)
    return async dispatch => {
        dispatch ({
            type: 'SHOW',
            content: content
        })
        setTimeout(() => {
            dispatch({
                type: "SHOW",
                content: null
            })
        }, time*1000)
    }
}

