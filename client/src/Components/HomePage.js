import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='container'>
      <div>
        <h1>Hello Friends</h1>

        {/* <h2>Don't forget to use branches when pushing in order to prevent merge conflicts</h2> */}
        <div>
          <ul className='NavBar'>
            <li><button><Link to={"/toDoList/daily"}>Today's List</Link></button></li>
            <li><button><Link to={"/toDoList/weekly"}>Weekly List</Link></button></li>
            <li><button><Link to={"/toDoList/monthly"}>Monthly List</Link></button></li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage