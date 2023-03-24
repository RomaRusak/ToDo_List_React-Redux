import TodoItem from "../TodoItem/TodoItem"
import styles from './ToDoList.module.css'

const ToDoList = ({sortedTodos}) => {

    return (
        <div
        className={styles['todo-list-wrapper']} 
        >
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