import styles from './TodoItem.module.css'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'
import { motion } from 'framer-motion'
import todoRemove from '../../actions/todoRemove'
import { useDispatch } from 'react-redux'

const TodoItem = ({name, body, checked, time}) => {

    const dispatch = useDispatch()

    const removeTodo = () => {
        dispatch(todoRemove(time))
    } 

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
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
            <div
            className={styles['remove-button-wrapper']}
            >
                <button
                className={styles['remove-button']}
                onClick={removeTodo}
                >
                    удалить
                </button>
            </div>
        </motion.div>
    )
}

export default TodoItem