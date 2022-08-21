import {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [task, setTask] = useState("");
  const [errors, setErrors] = useState({}); 

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/planner", {
      task,
      // Having Trouble getting dueDate to work on post request. ERROR dueDate not defined
      dueDate
    })
    .then((res) => {
      console.log(res);
      setTask(''); 
    })
    .catch((err) => {
      console.log(err);
      setErrors(err.response.data.errors)
    })
  }

  return (
    <div className='container'>
      <div>
        <h1>Hello Friends</h1>

        {/*Don't forget to use branches when pushing in order to prevent merge conflicts */}
        <div>
          <ul className='NavBar'>
            <li><button><Link to={"/toDoList/all"}>Show All</Link></button></li>
            <li><button><Link to={"/toDoList/today"}>Today</Link></button></li>
            <li><button><Link to={"/toDoList/week"}>Week</Link></button></li>
            <li><button><Link to={"/toDoList/month"}>Month</Link></button></li>
          </ul>
        </div>
        {/* Use built in date function to create time zone when tasks
        need to be completed. Example: let date = new Date(year, month, day, hours minutes, seconds, milliseconds)*/}
        <div className='create_form_container'>
            <form onSubmit={onSubmitHandler}>
              <label>Add Plan:</label>
              <br/>
              <textarea cols={60} rows={15} name="task" value={task}
              onChange={(e) => setTask(e.target.value)}/>

              {errors.task ? <p>{errors.task.message}</p>
              : null }
              <br/>
              <label>Due Date:</label>
              <br/>
              <input type={"date"}/>
              <br/>
              <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default HomePage