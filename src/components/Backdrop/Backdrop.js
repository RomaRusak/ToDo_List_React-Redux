import styles from './Backdrop.module.css'

const Backdrop = (props) => {

    return (
        <div
        className={styles.backdrop}
        onClick={() => {props.setShowModal(false)}}
        >

        </div>
    )
}

export default Backdrop