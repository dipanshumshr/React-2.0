import React, { useEffect, useState } from 'react'

function Tweet({onAdd}) {
  const [input, setInput] = useState("")
  const [countComplete, setCountComplete] = useState(false)

  useEffect(()=>{
    if(input.length > 140)
    {
      setCountComplete(true)
    }
  },[input])

  function handleChange(e)
  {
      const input = e.target.value;
      setInput(input)
  }

  return (
    <div>
      <h4>Character remaining {140-input.length}/140</h4>
      <input name = "tweet" type='text' value={input} onChange={handleChange} disabled={countComplete}/>
      <button onClick={()=>onAdd(input)}>Save tweet</button>
    </div>
  )
}

export default Tweet