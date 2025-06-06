import React, { useRef, useState } from 'react'
import Toggler from './Toggler';

function Forms() {
    const [check ,setCheck] = useState(false)
    const [value,setValue] = useState("")

    const handleChange = () => {
        setCheck(prev => !prev)
    }

    const inputRef = useRef();
    
    const handleRef = (e) => {
        inputRef.current.value = e.target.value
    }

  return (
    <form>
        <Toggler onCheck = {handleChange} />
        {
            check?
            <input type="text" value={value} onChange={(E)=>{setValue(E.target.value)}}/>
            : <input type="text" ref = {inputRef} onChange={handleRef}/>
        }
    </form>
  )
}

export default Forms