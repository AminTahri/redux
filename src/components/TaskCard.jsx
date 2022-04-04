import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../redux/actions'



const TaskCard = ({data}) => {
    const dispatch=useDispatch
  return (
    <div>
        <h1> 
            {data.action}
        </h1>
        <button onClick={()=>dispatch(deleteTask(data.id))} > Delete</button>
        <button onClick={()=>dispatch(completeTask(data.id))}>Complete</button>
      
        <hr />
    </div>
  )
}

export default TaskCard