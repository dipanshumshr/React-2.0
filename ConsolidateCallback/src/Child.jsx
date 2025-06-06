import React from 'react'

function Child({onUpdation}) {
  return (
    <button onClick={()=> onUpdation("updated by the children")}>Click to uodate you parent</button>
  )
}

export default Child