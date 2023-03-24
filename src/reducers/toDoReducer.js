const toDoReducer = (initialState, action) => {
    switch (action.type) {
        case 'SET_CHECKED_STATUS':
            return [...initialState.map(item => {
                if (item.time === action.id) return {...item, checked: !item.checked}
                return item
            })]
        case 'TODO_ADD':
            return [...initialState, {name: action.name, body: action.body, checked: false, time: action.time}]
        default:
            return initialState
    }
}

export default toDoReducer