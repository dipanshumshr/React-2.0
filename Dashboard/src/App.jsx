import { useState } from 'react'

import './App.css'
import { tabsData } from './data' 
import DashBoard from './DashBoard'

function App() {
  const [activeTab , setActiveTab] = useState(tabsData[0].id)

  function handleClick(id)
  {
      setActiveTab(prev => prev === id ? null : id)
  }

  return (
    <>
      <div>
        <h2>Personalized Dashboard</h2>
      </div>
      <div>
        {tabsData.map(val=>
          (
              <DashBoard key= {val.id} data = {val} isActiveTab = {activeTab === val.id}  onClick = {() => handleClick(val.id)}/>
          ))}  
      </div>    
    </>
  )
}

export default App
