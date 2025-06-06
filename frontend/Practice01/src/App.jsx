// Write a functional component that implements a counter with a button. On each click, increase the count by 2. Use useState.
import { useState } from "react";
import CounterTwo from "./components/counterTwo";

function App() {

  const [twoCount, setTwoCount] = useState(0)

  return (
    <>
      <h1>{twoCount}</h1>
      <CounterTwo increment ={setTwoCount}/>
    </>
  )
}

export default App
