import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tweet, setTweet] = useState("")
  const [isDisable, setIsDisabled] = useState(false)

  function handleChanges(event)
  {
     const value = event.target.value

      if(tweet.length >=125)
      {
        setIsDisabled(true)
        return
      }

      setTweet(value)
  }

  function handleReset()
  {
    setTweet("");
    setIsDisabled(false)
  }

  return (
    <>
      <div>
             <h3>Character count {tweet.length} / 125 </h3>
            <input className = "tweet"  type = "text" name = "Tweet" value = {tweet} onChange={handleChanges} disabled = {isDisable}/>
      </div>
     
     
      <button onClick={handleReset}>Reset all</button>

       {isDisable && "LIMIT REACHED"}
    </>
  )
}

export default App
