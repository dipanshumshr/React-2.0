import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  const [message, setMessage] = useState("Hello how are you blud")

  function handleMessage(message)
  {
    setMessage(message);
  }

  return (
    <>
      <h1>{message}</h1>
      <Child onUpdation = {handleMessage}/>
    </>
  )
}

export default App
