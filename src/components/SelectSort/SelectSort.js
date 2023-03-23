const SelectSort = ({selectValue, onChangeValue}) => {

    return (
        <select
        value={selectValue}
        onChange={e => onChangeValue(e.target.value)}
        >
            <option disabled>отсортировать по:</option>
            <option value="name">по заголовку</option>
            <option value="body">по описанию</option>
            <option value="time">по дате добавления</option>
        </select>
    )
}

export default SelectSort