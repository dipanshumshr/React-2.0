import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import useLogin from './app/LoginStore'
import Profile from './Components/Profile'


function App() {
  const [count, setCount] = useState(0)
  const user = useLogin(s=>s.user)

  return (
    <>
      {user.username ? <Profile /> : <Login />}
    </>
  )
}

export default App
