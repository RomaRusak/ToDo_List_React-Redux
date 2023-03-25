const SearchInput = ({searchInputValue, setSearchInputValue}) => {

    return (
        <>
        <input 
        type="text"
        value={searchInputValue}
        onChange={e => {setSearchInputValue(e.target.value)}}
        />
        </>
    )
}

export default SearchInput