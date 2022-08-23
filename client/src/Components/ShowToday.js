import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link, useNavigate } from "react-router-dom";


const ShowToday = (props) => {
    const {toDoList, setToDoList} = props;
    const navigate = useNavigate();

    // build a formatted string for todays date
    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = currentDate.getMonth(); //Be careful! January is 0 not 1
    month = month + 1;
    let monthStr = month.toString();
    if (monthStr.length < 2) {
        monthStr = "0" + monthStr;
    }
    let year = currentDate.getFullYear();
    let dateString = year + "-" +(monthStr) + "-" + date;

    // filter the toDoList array recieved from props for dueDate = todays date
    const filterArr = toDoList.filter(( task, index ) => 
        task.dueDate.slice(0,10) === dateString );
    // console.log("Filtered Array = ", filterArr);

    const handleCompleted = (list) => {

        list.markedDelete = !list.markedDelete;
        setToDoList([...toDoList]);
    };
    
    const styled = (markedDelete) => {
        if (markedDelete === true) {
            return "completed";
        } else {
            return "notCompleted";
        }
    };


    const deleteItem = (taskId) => {
        axios.delete(`http://localhost:8000/api/planner/${taskId}`)
        .then((res) =>{
            console.log(res.data);
            const newTask = toDoList.filter(( task, index ) => task._id !== taskId )
            setToDoList(newTask);
            navigate('/toDoList/all');
        })
        .catch((err) => console.log("Error of newToDoList", err));
    };

    return (
    <div className='container'>
        <div>
            <h1>Hello Friends</h1>
            <div>
                <ul className='NavBar'>
                    <li><button><Link to={"/"}>Home Page</Link></button></li>
                    <li><button><Link to={"/toDoList/all"}>Show All</Link></button></li>
                    <li><button><Link to={"/toDoList/week"}>Week</Link></button></li>
                    <li><button><Link to={"/toDoList/month"}>Month</Link></button></li>
                </ul>
            </div>
   {/* added a table structure needs to be CSSd to be in place- JB */}

        <div className='table_container'>
                <table className="tableData">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Due Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { filterArr.map((list, index) => {
                            return(
                            <tr className={styled(list.markedDelete)} key={list._id}>
                                <td>
                                    {/* <input type="checkbox" onChange={(e) => handleCompleted(list)} /> */}
                                    {list.task}
                                </td>
                                <td>{moment(list.dueDate).format("MM-DD-YYYY")}</td>
                                <td>
                                {/* modified Link route below trying to get edit page to work */}
                                    <Link className="Link" to= {`/toDoList/edit/${list._id}`}>Edit</Link> | 
                                    <button className='delete-button' onClick = {() => deleteItem(list._id)}>Delete </button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div> 
    )

}

export default ShowToday