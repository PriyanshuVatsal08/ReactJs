import React from 'react'
import './Counter.css'
import { useState } from "react";
const Counter = () => {

  const[count,setCount]=useState(0);
  return (
    <div className='counter-body'>
      <p>Number of time you click {count}</p>
      <button onClick={()=>setCount(count+1)}>Click me</button>

      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
