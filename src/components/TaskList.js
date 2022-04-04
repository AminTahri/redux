import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

const TaskList = () => {
    const {todos}=useSelector(state=>state)
  return (
    <div>
{
    React.Children.toArray(todos.map(task=><TaskCard data={task}/>))
}
    </div>
  )
}

export default TaskList