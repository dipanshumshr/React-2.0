import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Form from './Form'

function App() {

  const [fruitList, setFruitList] = useState([{
    id: nanoid(10),
    fruitName: "",
    weight: 0
  }])

  function handleAdd() {
    const newObj = {
      id: nanoid(10),
      fruitName: "",
      weight: 0
    }

    setFruitList(prev => [...prev, newObj])
  }

  function handleDelete(id) {
    setFruitList(prev => prev.filter(val => val.id !== id))
  }

  function handleSubmit() {
    console.log(fruitList)
  }

  function handleReset() {
    setFruitList([{
      id: nanoid(10),
      fruitName: "",
      weight: 0
    }])
  }

  function handleChange(id, fieldName, value)
  {
    setFruitList(prev => 
      prev.map(val => val.id === id ? {...val, [fieldName] : value} : val)
    )
  }


  return (
    <>
      <div>
        {fruitList.map(val => (
          <Form key={val.id} data={val} onChangeHandle = {handleChange} onAddHandler={handleAdd} onDeleteHandler={() => handleDelete(val.id)}/>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App