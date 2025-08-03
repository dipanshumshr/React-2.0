import { useEffect, useState } from 'react'
import './App.css'
import { users } from './data'

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [matchingString, setMatchingString] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
      const filteredUser = users.filter(val => val.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
      setMatchingString(filteredUser)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [searchInput, users])

  return (
    <>
      <input type="text" name='search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
      {
        matchingString.length > 0 ? <ul>
          {!isLoading ? matchingString.map(val => (
            <li key={val}>{val}</li>
          )) : <p>Searching ...</p>}
        </ul> : null
      }

    </>
  )
}

export default App
