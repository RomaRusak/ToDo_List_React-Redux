import styles from './Modal.module.css'
import ModalForm from '../ModalForm/ModalForm'

const Modal = (props) => {

    return (
        <div
        className={styles.modal}
        >
            <div
            className={styles['close-modal']}
            onClick={() => props.setShowModal(false)}
            >
                X
            </div>
            <ModalForm 
            setShowModal={props.setShowModal}
            />
        </div>
    )
}

export default Modal