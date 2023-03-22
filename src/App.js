import { useState } from 'react';
import './App.css';
import ShowModal from './components/ShowModal/ShowModal';
import MyButton from './UI/MyButton/MyButton';

function App() {

  const [showModal, setShowModal] = useState(true)

  return (
    <div className="App">
      <MyButton
        onClick={() => setShowModal(true)}
      >
         показать модалку
      </MyButton>
      {showModal 
      && (
        <ShowModal 
        setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default App;
