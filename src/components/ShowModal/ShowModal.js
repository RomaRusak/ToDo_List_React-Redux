import React from 'react-dom'
import Backdrop from '../Backdrop/Backdrop'
import Modal from '../Modal/Modal'

const ShowModal = (props) => {

    return (
        <>
        {React.createPortal(<Backdrop 
        setShowModal={props.setShowModal}
        />, document.getElementById('backdrop'))}
        {React.createPortal(<Modal />, document.getElementById('modal'))}
        </>
    )
}

export default ShowModal