import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("")
  const [history, setHistory] = useState([])
  const [items, setItems] = useState([])




  function handleChange(e) {
    const newInput = e.target.value
    setHistory(prev => [...prev, input])
    setInput(newInput)
    setItems([])
  }

  const handleHistory = useCallback(() => {
    const lastItem = history[history.length - 1]
    setItems(prev => ([...prev, input]))
    setInput(lastItem)
    setHistory(prev => prev.slice(0, -1))
  }, [history,input])



  const handleRedo = useCallback(() => {
    const lastRedo = items[items.length - 1]
    setHistory(prev => ([...prev, input]))
    setInput(lastRedo)
    setItems(prev => prev.slice(0, -1))
  },[items,input])


    useEffect(() => {
    function handleKeyDown(e) {
      if (e.ctrlkey && e.key === 'z') handleHistory
      if (e.ctrlkey && e.key === 'y') handleRedo
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleHistory, handleRedo])

  
  return (
    <>
      <h2>{input}</h2>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleRedo} disabled={items.length === 0}> Redo </button>
      <button onClick={handleHistory} disabled={history.length === 0}> Undo </button>
    </>
  )
}

export default App
