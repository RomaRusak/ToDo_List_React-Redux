import TodoItem from "../TodoItem/TodoItem"
import styles from './ToDoList.module.css'
import ListIsEmpty from "../ListIsEmpty/ListIsEmpty"
import { AnimatePresence } from "framer-motion"

const ToDoList = ({sortedTodos, nothingFound}) => {

    return (
        <div
        className={styles['todo-list-wrapper']} 
        >   
        <AnimatePresence mode={'wait'}>
            {sortedTodos.length > 0 
            ? 
                <>
                    {sortedTodos.map(todo => (
                    <TodoItem
                    key={todo.time.toString()}
                    {...todo}
                    />
                    ))}
                </>
            : nothingFound
            ? (
                <ListIsEmpty>
                    ничего не найдено
                </ListIsEmpty>
            )
            : (
                <ListIsEmpty>
                    сейчас ваш список дел пуст
                </ListIsEmpty>
            )
            }
        </AnimatePresence>
        </div>
    )
}

export default ToDoList