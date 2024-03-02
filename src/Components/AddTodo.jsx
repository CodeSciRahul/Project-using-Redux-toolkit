import React from 'react'
import {useDispatch } from 'react-redux'
import { useState } from 'react'
import { addtodo } from '../Feature/Todo/TodoSlice'
const AddTodo = () => {

    const [input, setinput] = useState('')

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addtodo(input))
        setinput('')
    }

  return (
    <>
    <form onSubmit={addTodoHandler} className='space-x-7 mobile-device'>
        <input 
        type="text" 
        className=' w-[70%] bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus: ring-2 focus: ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        placeholder='Enter a Todo...'
        value= {input}
        onChange={(e)=>setinput(e.target.value)}
        />
        <button 
        type="submit"
        className=' btn text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none 
        hover:bg-indigo-600 rounded text-lg'
        >
            Add Todo
        </button>
    </form>
    </>
  )
}
export default AddTodo
