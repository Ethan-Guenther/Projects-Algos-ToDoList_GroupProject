import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import ShowAll from './Components/ShowAll';

function App() {
  {/*We will use this toDoList state for each Separate page... All, Today, Week
and month. Remember to use props when bringing state down to the child class.*/}
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/planner")
    .then((getList) => {
        console.log(getList);
        console.log(getList.data);
        setToDoList(getList.data);
    })
    .catch((err) => console.log("Error grabbing ToDo list",err))
}, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/toDoList/all' element={<ShowAll toDoList = {toDoList} setToDoList = {setToDoList}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
