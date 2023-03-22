import styles from './MyButton.module.css'

const MyButton = ({buttonDisable, ...props}) => {

    const button = buttonDisable 
    ? (
        <button
        {...props}
        disabled
        className={[styles['my-button'], styles['disabled']].join(' ')}
        >
            {props.children}
        </button>
    )
    : (
        <button
        {...props}
        className={styles['my-button']}
        >
            {props.children}
        </button>
    ) 

    return button
}

export default MyButton