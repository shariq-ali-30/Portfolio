import React, { useState } from 'react'
import Login from '../components/Login'

const Admin = () => {

    const [user, setUser] = useState(null)
  return (
    <>
        {!user ? <Login setUser={setUser} /> : ""}
    </>
  )
}

export default Admin