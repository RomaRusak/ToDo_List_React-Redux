import styles from './TodoItem.module.css'

const TodoItem = (props) => {

    console.log(props)

    return (
        <div
        className={styles['todo-item']}
        >

        </div>
    )
}

export default TodoItem