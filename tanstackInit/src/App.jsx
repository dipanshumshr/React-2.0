import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery } from '@tanstack/react-query'

function App() {

  const { data , isPending , isFetching, refetch , isError, error}= useQuery({
    queryKey : ['Todos'],
    queryFn : getTodos
  })

  return (
   <>
      {isError ? (
        <h2>Error: {error?.message || "Something went wrong"}</h2>
      ) : (
        <>
          <h1>Something blah blah</h1>
          <div>
            {isFetching ? (
              <p>Loading ...</p>
            ) : (
              data?.slice(0, 10).map((todo) => (
                <div key={todo.id}>
                  <h2>{todo.title}</h2>
                  <p>{todo.completed ? "Completed" : "Not Completed"}</p>
                </div>
              ))
            )}
          </div>
          <button onClick={() => refetch()}>Refetch</button>
        </>
      )}
    </> 
  )
}

const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todoss")

    if(!response.ok){
      throw new Error(`Failed to fetch Todos ${response.status}`)
    }
    const respData = await response.json()
    return respData;
}

export default App
