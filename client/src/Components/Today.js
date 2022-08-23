import React, { useState, useEffect }  from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import moment from 'moment'

const Today = (props) => {
    const {toDoList, setToDoList} = props;

    
    const currentDate = moment().format('MM-DD-YYYY');
    console.log(currentDate);

    useEffect( () => {
        axios.get("http://localhost:8000/api/planner")
        .then( (res) => {
            console.log(res.data);
            setToDoList(res.data);
        })
        .catch( (err) => console.log(err) );
    }, []);

  return (
    <div>
        { toDoList.map((list, index) => {
            {
                if(moment(currentDate).add(0,'days').format('MM-DD-YYYY') === moment(list.dueDate).add(1,'days').format("MM-DD-YYYY"))
                return(
                      <tr key={list._id}>
                        <td>{list.task}</td>
                        <td>{moment(list.dueDate).add(1,'days').format("MM-DD-YYYY")}</td>
                        {console.log(moment(currentDate).add(7,'days').format("MM-DD-YYYY"))}
                        <td>
                          {/* modified Link route below trying to get edit page to work */}
                        </td>
                      </tr>
                    )
            }

                  })}
    </div>
  )
}

export default Today