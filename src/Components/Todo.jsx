import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetodo } from '../Feature/Todo/TodoSlice'
const Todo = () => {
    const todos = useSelector(state => state.Todos)
    const dispatch = useDispatch()
   
  return (
    <>
    <div className='mt-1'>My Todos</div>
        {
        todos.map((todo) => {
          return <li key={todo.id} className='list-none my-5 bg-slate-700 py-4 flex justify-between w-[90%] mx-auto px-5 rounded-[6px]'>
                {todo.text}
            <div>
                 <button onClick={
                ()=>dispatch(removetodo(todo.id))} className='bg-red-800 px-4 mx-4 hover:opacity-80 transition-all ease-in-out text-white rounded-[5px]'>X</button>

            </div>
           
            </li>
})}
    
    </>
  )
}

export default Todo