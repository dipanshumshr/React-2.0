import React, { useEffect, useState } from 'react'
import { usePrevious } from '../Data/usePrevious'

function Previous() {
    const[count,setCount] = useState(0)
    const prevValue = usePrevious(count)
  return (
    <div>
        <button onClick={()=>setCount(prev => prev+1 )}>Increment</button>
        <h3>Current count : {count}</h3>
        <h3>Previous count : {prevValue}</h3>
    </div>
  )
}

export default Previous