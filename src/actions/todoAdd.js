const todoAdd = (name, body) => ({
    type: 'TODO_ADD',
    name,
    body,
    time: Date.now() 
})

export default todoAdd