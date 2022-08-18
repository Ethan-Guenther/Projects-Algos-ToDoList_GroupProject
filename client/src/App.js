import './App.css';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
