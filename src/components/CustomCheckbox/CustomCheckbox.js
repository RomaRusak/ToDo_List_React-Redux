import styles from './CustomCheckbox.module.css'
import { useDispatch } from 'react-redux'
import setCheckedStatus from '../../actions/setCheckedStatus'
import iconActive from '../../img/iconCheckboxAtvive.png'
import iconInactive from '../../img/inconCheckboxInactive.png'
import { motion } from 'framer-motion'

const CustomCheckbox = (props) => {

    const dispatch = useDispatch()

    const setCheced = () => {
        dispatch(setCheckedStatus(props.id))
    }
    
    return (
        <div
        className={styles['custom-input-wrapper']}
        >
            <input
            className={styles['custom-input']}
            {...props}
            onChange={setCheced}
            />
            <div
            className={styles['custom-input-border']}
            onClick={setCheced}
            >  
                {
                    props.checked
                    ? (
                        <motion.img
                        initial={{opacity: 0,}}
                        animate={{opacity: 1 }}
                        transition={{duration: .5}}
                        className={styles['custom-icon']} 
                        src={iconActive}
                        />
                     )
                     : (
                        <img 
                        className={styles['custom-icon']} 
                        src={iconInactive}
                        />
                     )
                }    
            </div>
            <label htmlFor={props.id}>активен</label>
        </div>
    )
}

export default CustomCheckbox