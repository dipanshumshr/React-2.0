import React, { useState } from 'react'
import useLogin from '../app/LoginStore'

function Login() {
    const [user,setUser] = useState({
        name : "",
        password : ""
    })

    const login = useLogin(s => s.login)

    const handleChange = (e) => {
        const {name , value} = e.target
        setUser(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(user)
    }


  return (
    <div>
        <input name="name" type = "text" value={user.name} onChange={handleChange} />
        <input name="password" type = "text" value={user.password} onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login