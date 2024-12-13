import TodoList from './components/TodoList' 
import TodoInput from './components/TodoInput' // Assuming TodoInput is defined in TodoInput.jsx
import {useState} from "react"

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

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

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
