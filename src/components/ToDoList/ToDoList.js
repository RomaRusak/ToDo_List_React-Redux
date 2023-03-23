import TodoItem from "../TodoItem/TodoItem"

const ToDoList = ({sortedTodos}) => {

    return (
        <div>
            {sortedTodos.map(todo => (
                <TodoItem
                key={todo.time.toString()} 
                {...todo}
                />
            ))}
        </div>
    )
}

export default ToDoList