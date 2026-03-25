import Navbar from './component/Navbar'
import Button from './component/Button'
import './App.css'
import { useState } from 'react'

function App() {

  const[count,setCount]=useState(0);

  function clickHandler(){
    setCount(count+1);
  }
  return (
   <>
      <Button clickHandler={clickHandler}>
        <h1>{count}</h1>
      </Button> 
      <Navbar name="Priyanshu Vatsal">
        <h1>Hello Priyanshu</h1>
        <p>How are you</p>
      </Navbar>
   </>
  )
}

export default App
