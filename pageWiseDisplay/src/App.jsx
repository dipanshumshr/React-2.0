import { useEffect, useState } from 'react'
import './App.css'
import { users } from './data'

function App() {
  const [pageNum , setPageNum] = useState(1)
  const size = 10;
  const [activeArray , setActiveArray] = useState([])
  const [previous, setPrevious] = useState(0)
  const [next,setNext] = useState(10)

  useEffect(()=>{
    const miniArray = users.slice(previous, next)
    setActiveArray(miniArray)
  },[users, previous , next])

  function handlePrevious()
  {
    const LowerLimit = previous - size
    const upperLimit = next - size
    setPageNum(prev => prev - 1)
    setPrevious(LowerLimit)
    setNext(upperLimit)
  }

  function handleNext()
  {
    const LowerLimit = previous + size
    const upperLimit = next + size
    setPageNum(prev=> prev + 1)
    setNext(upperLimit)
    setPrevious(LowerLimit)
  }

  return (
    <>
    <h1>PAGE NUMBER {pageNum}</h1>
      <ul>
        {activeArray.map(user => (
          <li key={user}> {user} </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevious} disabled={previous < 10}>Previous</button>
        <button onClick={handleNext} disabled={next > 90}>Next</button>
      </div>
    </>
  )
}

export default App
