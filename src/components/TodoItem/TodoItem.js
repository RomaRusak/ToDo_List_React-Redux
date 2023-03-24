import styles from './TodoItem.module.css'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'

const TodoItem = ({name, body, checked, time}) => {

    console.log(name, body, checked, time)

    return (
        <div
        className={styles['todo-item-wrapper']}
        >   
            <div
            className={styles['todo-item-title']}
            >
                <h2>{name}</h2>
            </div>
            <CustomCheckbox 
            id={time}
            type="checkbox"
            checked={checked}
            />
            <h3>{body}</h3>
        </div>
    )
}

export default TodoItem