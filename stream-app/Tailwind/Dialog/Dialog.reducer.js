const Model = {
    open: false
}

const DialogReducer = (state = Model, action) => {
    switch (action.type) {
        case 'OPEN_DIALOG': return {
            open: true
        }
        case 'CLOSE_DIALOG': return {
            open: false
        }
        default: return state
    }
}

export default DialogReducer;