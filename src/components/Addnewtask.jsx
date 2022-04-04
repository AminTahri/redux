import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewtask } from '../redux/actions';

const Addnewtask = () => {
    const [action, setAction] = useState("")
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const task={
            id:Math.random,
            action,
            isDone:false,
        };
        dispatch(addNewtask(task))
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text"  value={action} onChange={e=>setAction(e.target.value)}/>
            <button type='submit'>ADD</button>
        </form>
    </div>
  )
}

export default Addnewtask