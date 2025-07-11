import './App.css'
import TodoInput from './Component/TodoInput'
import Todos from './Component/Todos'
import Todo from './Models/Todo'
import { useState } from "react"

function App() {

  const [TodoState, setTodoState] = useState<Todo[]>([]);

  // const TodoArr = [new Todo("Learn React"), new Todo("Learn Typescript")]

  function handleTodos(Todo : Todo)
  {
    setTodoState(prev => {
      const updated = [...prev, Todo]
      return updated
    })
  }

  return (
    <>
        <TodoInput submitTodo={handleTodos}/>
        <Todos TodosList={TodoState}/>
    </>
  )
}

export default App
