import React from 'react'

const ShowAll = (props) => {

    const {toDoList, setToDoList} = props;
  return (
    <div>
        ShowAll

        {/* Created basic list, needs restructuring still for intended layout. use Table */}
        {
            toDoList.map((list, index) => {
                return(
                    <div>
                        <p>{list.task}</p>
                        <p>{list.dueDate}</p>
                    </div>
                    
                )
            })
        }
    </div>
  )
}

export default ShowAll