import styles from './MyInput.module.css'

const MyInput = (props) => {

    return (
        <input
        className={styles['my-input']} 
        {...props}
        />
    )
}

export default MyInput