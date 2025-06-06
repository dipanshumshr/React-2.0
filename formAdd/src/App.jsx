import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'

function App() {
  const[formCount,setFormCount] = useState([{name : "" , email : "" , birthDate : ""}])

  function handleAddForm()
  {
    setFormCount(prev => [...prev,{name : "" , email : "" , birthDate : ""}])  
  }

  function handleRemoveForm()
  {
    setFormCount(prev => prev.slice(0,-1))
  }

  function handleUpdate (index, newData)
  {
    setFormCount(prev => {
      const updateForm = [...prev]
      updateForm[index] = newData
      return updateForm
    })
  }

  function handleSubmitAll()
  {
    console.log(formCount)
  }

  return (
    <>
      <div>
         {formCount.map((formData,index) => (
          <Form 
          key={index}
          index = {index}
          formData = {formData}
          handleUpdate = {handleUpdate}
          />
         ))}
      </div>
        <button onClick={handleAddForm}>Add</button>
        <button onClick={handleRemoveForm}>Remove</button> 
        <button onClick={handleSubmitAll}>Submit</button>   
    </>
  )
}

export default App
