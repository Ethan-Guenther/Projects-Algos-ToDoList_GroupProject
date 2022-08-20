import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='container'>
      <div>
        <h1>Hello Friends</h1>

        {/*Don't forget to use branches when pushing in order to prevent merge conflicts */}
        <div>
          <ul className='NavBar'>
            <li><button><Link to={"/toDoList/daily"}>Show All</Link></button></li>
            <li><button><Link to={"/toDoList/daily"}>Today's List</Link></button></li>
            <li><button><Link to={"/toDoList/weekly"}>Weekly List</Link></button></li>
            <li><button><Link to={"/toDoList/monthly"}>Monthly List</Link></button></li>
          </ul>
        </div>
        {/* Use built in date function to create time zone when tasks
        need to be completed. Example: let date = new Date(year, month, day, hours minutes, seconds, milliseconds)*/}
        <div className='create_form_container'>
            <form>
              <label>Add Plan:</label>
              <br/>
              <textarea cols={60} rows={15}/>
              <br/>
              <label>Number of days to complete:</label>
              <br/>
              <input type={"number"}/>
              <br/>
              <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default HomePage