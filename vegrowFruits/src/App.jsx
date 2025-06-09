import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import { nanoid } from '@reduxjs/toolkit'

function App() {
  const [formData , setFormData] = useState([{
    "id" : nanoid(10),
    "Product-name" : "",
    "Product-sku" : "",
    "Product-type" : "",
    "Expected" : 0,
    "Actual" : 0,
  }])
  
  function handleChange(newData)
  {
    const id = newData.id;

    setFormData(prev => (
      prev.map(value => 
        value.id === id ? newData : value
      )
    ))
  }

  function addHandle()
  {
    setFormData(prev => {
      const newResult = [...prev,{"id": nanoid(10)  , "Product-name" : "",
    "Product-sku" : "",
    "Product-type" : "",
    "Expected" : 0,
    "Actual" : 0,}]

    return newResult;
    })
  }

  function remove()
  {
    setFormData(prev => prev.slice(0,-1));
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    console.log(formData)
  }

  return (
    <>
      <div>
        {formData.map(value=> (
          <Form key={value.id} FormValue={value} onUpdate={handleChange} />
        ))}

      </div>
      <div>
        <button onClick={addHandle}>Add</button>
        <button onClick={remove}>Remove</button>
      </div>

      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default App
