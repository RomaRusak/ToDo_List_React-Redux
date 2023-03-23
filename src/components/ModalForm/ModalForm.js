import { useEffect, useReducer, useState } from 'react'
import { useDispatch} from 'react-redux'
import MyInput from "../../UI/MyInput/MyInput"
import MyButton from "../../UI/MyButton/MyButton"
import styles from './ModalForm.module.css'
import todoAdd from "../../actions/todoAdd"

const formStateReducer = (initialState, action) => {
    
    switch (action.type) {
        case 'CHANGE_VALUE':
            return {...initialState, [action.inputName]: { value: action.val, valid: action.val.length !== 0 ? true : false}}

        default:
            return initialState
    }
}

const ModalForm = (props) => {

    const [formState, dispatchFormState] = useReducer(formStateReducer, {name: {value: '', valid: false}, body: {value: '', valid: false}})

    const [buttonDisable, setButtonDisable] = useState(true)

    const changeFormState = (inputName, val) => {
        dispatchFormState({type: 'CHANGE_VALUE', inputName, val})
    }

    const dispatch = useDispatch()

    const addTodo = (e) => {
        e.preventDefault()
        const {name : {value : name} , body: {value: body}} = formState
        dispatch(todoAdd(name, body))
        props.setShowModal(false)
    } 

    useEffect(() => {
        
        const timer = setTimeout(() => {

            Object.values(formState).filter(item => item.valid).length !== Object.keys(formState).length
            ? setButtonDisable(true)
            : setButtonDisable(false)
           
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    }, [formState])

    return (
        <form
        className={styles['modal-form']}
        onSubmit={addTodo}
        >
            <MyInput 
            placeholder='заголовок'
            type="text"
            value={formState.name.value}
            onChange={(e) => changeFormState('name', e.target.value)}
            style={
                formState.name.valid
                ?  {backgroundColor: 'rgb(168, 228, 160)'}
                :  {backgroundColor: 'rgb(204, 51, 51)'}
            }
            />
            <MyInput 
            placeholder='описание'
            type="text"
            value={formState.body.value}
            onChange={(e) => changeFormState('body', e.target.value)}
            style={
                formState.body.valid
                ?  {backgroundColor: 'rgb(168, 228, 160)'}
                :  {backgroundColor: 'rgb(204, 51, 51)'}
            }
            />
            <MyButton
            buttonDisable = {buttonDisable}
            >
                добавить
            </MyButton>
        </form>
    )
}

export default ModalForm