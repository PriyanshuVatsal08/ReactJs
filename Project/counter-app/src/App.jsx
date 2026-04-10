import React, { useState } from 'react'
import './App.css'

const App = () => {
  const[counter,setCounter]=useState(0);

  function increaseCount(){
    setCounter(counter+1);
  }

  function decreaseCount(){
    if(counter > 0 ){
      setCounter(counter -1 );
    }else{
      alert("Display is already 0 ");
    }
  }
  return (
    <div id='count'>
      <h1>{counter}</h1>
      <button onClick={increaseCount}>ADD</button>

      <button onClick={decreaseCount}>MINUS</button>
    </div>
  )
}

export default App
