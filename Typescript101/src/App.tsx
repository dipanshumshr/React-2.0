import './App.css'
import Todos from './Component/Todos'
import Todo from './Models/Todo'

function App() {

  const TodoArr = [new Todo("Learn React"), new Todo("Learn Typescript")]

  return (
    <>
        <Todos TodosList={TodoArr}/>
    </>
  )
}

export default App
