const toDoReducer = (initialState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return [...initialState, {name: action.name, body: action.body, checked: false, time: action.time}]
        default:
            return initialState
    }
}

export default toDoReducer