import TodoList from './components/TodoList' 
import TodoInput from './components/TodoInput' // Assuming TodoInput is defined in TodoInput.jsx
import {useState} from "react"

function App() {

  const [todos, setTodos] = useState([])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {}

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
