import SelectSort from '../SelectSort/SelectSort'
import SearchInput from '../SearchInput/SearchInput'
import styles from './SortForm.module.css'

const SortForm = ({selectValue, onChangeValue, searchInputValue, setSearchInputValue}) => {

    return (
        <form
        className={styles['sort-form']}
        >
            <SelectSort 
            selectValue={selectValue}
            onChangeValue={onChangeValue}
            />
            <SearchInput
            searchInputValue={searchInputValue}
            setSearchInputValue={setSearchInputValue}
            />
        </form>
    )
}

export default SortForm