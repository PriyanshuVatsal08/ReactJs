
import './Counter.css'
import { useState } from "react";
const Counter = () => {

  const[count,setCount]=useState(0);
  return (
    <div className='counter-body'>
      <p>Number of time you click "{count}" </p>
      <div className='button-div'>
        <button onClick={()=>setCount(count+1)} >Add</button>

        <button onClick={()=>setCount(count>0 ? count-1 : 0)}>Minus</button>

        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
