import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("")
  const [history,setHistory] = useState([])
  const [future,setFuture] = useState([])


 

  function handleInput(event) {
            //     So when the user types:

            // Push current into history

            // Set new input value as current

            // Clear the future stack (since redo path is invalid after new input)

    setInput(event.target.value)

    setHistory(prev => [...prev, input])

    setFuture([])
  }

  function handlePrevValue()
  {
              //       When user hits Undo:

              // Pop from history

              // Push current into future

              // Set popped value as current
    if(history.length === 0)
    {
      return
    }

    const prevValue = history[history.length-1]
    const nextValue = history.slice(0,-1)

    setInput(prevValue)

    setFuture(prev => [input,...prev])

    setHistory(nextValue)

  }

  function handleNextValue()
  {
//       When user hits Redo:

// Pop from future

// Push current into history

// Set popped value as current
    if(future.length === 0 )
    {
      return
    }

    const nextValue = future[future.length-1]
    const newFuture = future.slice(0,-1)


    setFuture(newFuture)

    setInput(nextValue)

    setHistory(prev => [...prev,input])

}

  return (
    <>
      <div>
        <h1>{input}</h1>
      </div>
      <div>
        <div>
          <input type="text" value={input} onChange={handleInput} />
        </div>
        <div>
          <button onClick={handleNextValue}>Redo</button>
          <button onClick={handlePrevValue}>Undo</button>
        </div>
      </div>
    </>
  );
}

export default App;
