import { useState } from 'react'
import React from 'react-dom'
import MyButton from '../../UI/MyButton/MyButton'
import Backdrop from '../Backdrop/Backdrop'
import Modal from '../Modal/Modal'

const ShowModal = (props) => {

    const [showModal, setShowModal] = useState(false)

    const button = () => {
        return (
            <MyButton
            onClick={() => {setShowModal(true)}}
            style={{marginBottom: '25px'}}
            
            >
                Добавить заметку
            </MyButton>
        )
    }

    return (showModal)
    ? ( 
        <>
        {button()}
        {React.createPortal(<Backdrop 
        setShowModal={setShowModal}
        />, document.getElementById('backdrop'))}
        {React.createPortal(<Modal 
        setShowModal={setShowModal}
        />, document.getElementById('modal'))}
        </>
    )
    
    : (
       <>
       {button()}
       </>
    )
}

export default ShowModal