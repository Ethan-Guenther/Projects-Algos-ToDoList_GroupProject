import React, { useState, useEffect }  from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import moment from 'moment';

const ShowAll = (props) => {
    const {toDoList, setToDoList} = props;

    useEffect( () => {
        axios.get("http://localhost:8000/api/planner")
        .then( (res) => {
            console.log(res.data);
            setToDoList(res.data);
        })
        .catch( (err) => console.log(err) );
    }, []);

  return (
    <div className='container'>
      <div>
        <h1>Hello Friends</h1>

        <div>
          <ul className='NavBar'>
            <li><button><Link to={"/"}>Home Page</Link></button></li>
            <li><button><Link to={"/toDoList/today"}>Today</Link></button></li>
            <li><button><Link to={"/toDoList/week"}>Week</Link></button></li>
            <li><button><Link to={"/toDoList/month"}>Month</Link></button></li>
          </ul>
        </div>
        {/* Created basic list, needs restructuring still for intended layout. use Table */}
        { toDoList.map((list, index) => {
                return(
                    <div>
                        <p>{list.task}</p>
                        <p>{moment(list.dueDate).format("MM-DD-YYYY")}</p>
                    </div>
                    
                )
            })
        }
    </div>
    </div>
  )
}

export default ShowAll