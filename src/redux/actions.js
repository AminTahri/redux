import { ADD, COMPLETE, DELETE, EDIT } from "./actionTypes"



export const deleteTask=(id)=>{
    return{
        type:DELETE,
        payload:id
    }
}

export const completeTask=(id)=>{
    return {
        type:COMPLETE,
        payload:id,
    }
}

export const addNewtask=(newTask)=>{
    return{
        type:ADD,
        payload:newTask,
    }
}
export const editTask=(editedTask) =>{
    return {
        type:EDIT,
        payload:editTask
    }
}