import styles from './Modal.module.css'
import ModalForm from '../ModalForm/ModalForm'

const Modal = () => {

    return (
        <div
        className={styles.modal}
        >
            <ModalForm />
        </div>
    )
}

export default Modal