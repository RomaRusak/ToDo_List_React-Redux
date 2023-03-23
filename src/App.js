import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ShowModal from './components/ShowModal/ShowModal';
import MyButton from './UI/MyButton/MyButton';
import SortForm from './components/SortForm/SormForm';
import ToDoList from './components/ToDoList/ToDoList';

function App() {

  const todos = useSelector(data => data)

  const [selectSort, setSelectSort] = useState('name')

  const sortedTodos = useMemo(() => {
    return ((selectSort === 'name') || (selectSort === 'body'))
     ? todos.sort((firstItem, secondItem) => firstItem[selectSort].localeCompare(secondItem[selectSort]))
     : todos.sort((firstItem, secondItem) => firstItem.time - secondItem.time)
  }, [todos, selectSort])

  return (
    <div className="App">
      <ShowModal />
      <SortForm 
      selectValue = {selectSort}
      onChangeValue={setSelectSort}
      />
      <ToDoList 
      sortedTodos={sortedTodos}
      />
    </div>
  );
}

export default App;
