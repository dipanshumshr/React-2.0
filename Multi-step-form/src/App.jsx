import { useState } from 'react'
import './App.css'
import StepOne from './Components/StepOne'
import StepTwo from './Components/StepTwo'

function App() {

  const [oneData, setOneData] = useState({
    Name : "",
    Email : "",
  })

  const [twoData, setTwoData] = useState({
    Color : "",
    News : false
  })

   function handleUpdateOne(data)
   {
      setOneData(prev => ({
        ...prev,
        ...data
      }))
   }    

   function handleUpdateTwo(data)
   {
      setTwoData(prev => ({
        ...prev,
        ...data
      }))
   }

   function handleSubmit()
   {
      const result = {...oneData,
        ...twoData
      }

      console.log(result);
   }

  return (
    <>
      <StepOne onUpdate = {handleUpdateOne}/>
      <button>Next</button>
      <button>Back</button>
      <StepTwo onUpdate = {handleUpdateTwo}/>

      <div>
        <button onClick={handleSubmit}> Submit </button>
      </div>
    </>
  )
}

export default App
