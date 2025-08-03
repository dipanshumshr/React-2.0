import { useState } from "react"
import { data } from "./data"
import Accordion from "./Accordion"
import "./App.css"

function app()
{
  const[openID, setOpenID] = useState([])

  function toggleAccordion(id)
  {
      setOpenID(prev => {
      const matchingItemIndex =  prev.findIndex(val => val === id)      // if item is there in prev then we have remove it from the array 
      
      if(matchingItemIndex !== -1)
      {
        return prev.filter(val => val !== id)    // if item is not open then add it in the array
      }

      return [...prev, id]
    
      } )
  }


  return <div>|
      <h1>FAQ Accordion</h1>
      {data.map(val => (
        <Accordion key ={val.id} data = {val} isOpen = {openID.includes(val.id)} onClick = {() => toggleAccordion(val.id)} />
      ))}
  </div>
}

export default app;