import styles from './TodoItem.module.css'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'

const TodoItem = ({name, body, checked, time}) => {

    console.log(name, body, checked, time)

    return (
        <div
        className={checked ? [styles['todo-item-wrapper'], styles['inActive']].join(' ') : styles['todo-item-wrapper']}
        >   
            <div
            className={checked ? [styles['todo-item-title'], styles['crossed-out']].join(' ') : styles['todo-item-title']}
            >   
                <h2>{name}</h2>
            </div>
            <CustomCheckbox 
            id={time}
            type="checkbox"
            checked={checked}
            />
            <div
            className={styles['todo-item-description']}
            >
                <h3>{body}</h3>
            </div>
        </div>
    )
}

export default TodoItem