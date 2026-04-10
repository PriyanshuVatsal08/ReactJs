import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const[users,setusers]=useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setusers(data));
  },[])

  return (
    <div>
      {users.map(user=>(
        <p>{user.id}. {user.name} = {user.address.city} = {user.phone}</p>
      ))}
    </div>
  )
}

export default App
