import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'
function App() {

  return (
    <>
    <h1 className='py-4'>A Todo using Redux Toolkit</h1>
    <AddTodo/>
    <Todo/>
    </>
  )
}

export default App
