import React from 'react'
import useLogin from '../app/LoginStore'

function Profile() {
    const user = useLogin(s => s.user)
    const logout = useLogin(s => s.logOut)


  return (
    <div>
        <h2>Welcome {user.username} and your password is {user.password}</h2>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile