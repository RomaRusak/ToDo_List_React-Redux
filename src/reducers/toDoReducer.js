const toDoReducer = (initialState, action) => {
    switch (action.type) {
        case 'SET_CHECKED_STATUS':
            return [...initialState.map(item => {
                if (item.time === action.id) return {...item, checked: !item.checked}
                return item
            })]
        case 'TODO_ADD':
            return [...initialState, {name: action.name, body: action.body, checked: false, time: action.time}]
        case 'TODO_REMOVE':
            return [...initialState.filter(item => {
                return item.time !== action.id
            })]
        default:
            return initialState
    }
}

export default toDoReducer