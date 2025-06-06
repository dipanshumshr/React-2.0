import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [present, setPresent] = useState("")
  const [history, setHistory] = useState("")
  const [future, setFuture] = useState("")


  const handleEdit = (event) =>{
    const presentValue = present
    setPresent(event.target.value)
    setFuture("")
    setHistory(presentValue)
  }

  const handleUndo = () => {
    const historyValue = history
    const presentValue = present
    setHistory("")
    setFuture(presentValue)
    setPresent(historyValue)
  }

  const handleRedo = () => {
    const futureValue = future
    const presentValue = present

    setHistory(presentValue)
    setPresent(futureValue)
    setFuture("")
  }


  return (
    <>
    <h1>{present}</h1>
     <input type='text' value = {present} onChange={handleEdit}/>
     <button onClick={handleUndo} disabled={history === ""}>Undo</button>
     <button onClick={handleRedo} disabled={future === ""}>Redo</button>
    </>
  )
}

export default App
