import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import './App.css'
import Fruits from './Fruits'

function App() {
  const[formData, setFormData] = useState([{
    id : nanoid(10),
    name : "",
    weight : "",
    sku : ""
  }])

  function handleUpdate(fruit)
  {
    setFormData(prev => (prev.map ( value => 
      value.id === fruit.id? fruit : value
    )))
  }

  function AddFruits()
  {
    setFormData(prev => ([...prev,{
      id : nanoid(15),
      name : "",
      weight : "",
      sku : ""
    }]))
  }

  function removeFruit(id)
  {
    setFormData(prev => prev.filter(value=> value.id !== id ));
  }

  function duplicate(id)
  {
    setFormData(prev => {
        const index = prev.findIndex(item => item.id === id)
        if(index === -1)
        {
          return prev
        }

        const duplicateItem = prev[index]

        const updatedDuplicate = {...duplicateItem, id: nanoid(10)}

        const updatedItems = [...prev.slice(0,index+1),
          updatedDuplicate,
          ...prev.slice(index+1)
        ]

        return updatedItems
    })
  }

  function handleSubmit()
  {
    console.log(formData);
  }

  return (
    <>
      <div>
        {formData.map(value => 
          <Fruits key={value.id} onAdd = {AddFruits} onRemove = {removeFruit} onDuplicate = {duplicate} fruits={value} onUpdate = {handleUpdate} />
        )}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default App
