import styles from './ListIsEmpty.module.css'
import { motion } from 'framer-motion'

const ListIsEmpty = (props) => {

    return (
        <motion.div
        initial={{opacity: 0,}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className={styles['list-empty-wrapper']}
        >
            <h3
            className={styles['list-empty']}
            >
                {props.children}
            </h3>
        </motion.div>
    )
}

export default ListIsEmpty