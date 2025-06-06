import React from 'react';
import { useEffect, useState } from 'react'


function DebouncedInput() {
    const [input, setInput] = useState("")
    const [debounceValue , setDebounceValue] = useState("")
    const [editMode, setEditMode] = useState(false)
  
    useEffect(()=>{
      const timer = setTimeout(()=>{
        setEditMode(true);
        setDebounceValue(input)
      },2000)
  
      return ()=>{
        clearTimeout(timer);
      }
    },[input])
  
  
    const handleDebounce = (e) =>{
      setInput(e.target.value)
    }
  return (
    <div>
        <input type='text' value={input} onChange={handleDebounce}/>
        {editMode?<h2>{debounceValue}</h2>:<h2>...Loading</h2>}
    </div>
  )
}

export default DebouncedInput