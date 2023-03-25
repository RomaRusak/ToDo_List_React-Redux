import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ShowModal from './components/ShowModal/ShowModal';
import SortForm from './components/SortForm/SormForm';
import ToDoList from './components/ToDoList/ToDoList';

function App() {

  const todos = useSelector(data => data)

  const [selectSort, setSelectSort] = useState('name')

  const [searchInputValue, setSearchInputValue] = useState('')

  const sortedTodos = useMemo(() => {
    return ((selectSort === 'name') || (selectSort === 'body'))
     ? todos.sort((firstItem, secondItem) => firstItem[selectSort].localeCompare(secondItem[selectSort]))
     : todos.sort((firstItem, secondItem) => firstItem.time - secondItem.time)
  }, [todos, selectSort])

  const sortedAndFilteredTodos = useMemo(() => {
    const newTodos = searchInputValue === ''
    ? sortedTodos
    : sortedTodos.filter(({name, body}) => name.toLowerCase().includes(searchInputValue.toLowerCase().trim()) || body.toLowerCase().includes(searchInputValue.toLowerCase().trim()))

    const nothingFound = todos.length > 0 && newTodos.length === 0 ? true: false

    return {todos: newTodos, nothingFound}
  }, [searchInputValue, todos])

  return (
    <div className="App">
      <ShowModal />
      <SortForm 
      selectValue = {selectSort}
      onChangeValue={setSelectSort}
      searchInputValue={searchInputValue}
      setSearchInputValue={setSearchInputValue}
      />
      <ToDoList 
      sortedTodos={sortedAndFilteredTodos.todos}
      nothingFound={sortedAndFilteredTodos.nothingFound}
      />
    </div>
  );
}

export default App;
