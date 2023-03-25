import styles from './SelectSort.module.css'

const SelectSort = ({selectValue, onChangeValue}) => {

    return (
        <select
        value={selectValue}
        onChange={e => onChangeValue(e.target.value)}
        className={styles['select-input']}
        >
            <option disabled>отсортировать по:</option>
            <option value="name">по заголовку</option>
            <option value="body">по описанию</option>
            <option value="time">по времени добавления</option>
        </select>
    )
}

export default SelectSort