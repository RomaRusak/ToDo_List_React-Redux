import SelectSort from '../SelectSort/SelectSort'
import styles from './SortForm.module.css'

const SortForm = ({selectValue, onChangeValue}) => {

    return (
        <form
        className={styles['sort-form']}
        >
            <SelectSort 
            selectValue={selectValue}
            onChangeValue={onChangeValue}
            />
        </form>
    )
}

export default SortForm