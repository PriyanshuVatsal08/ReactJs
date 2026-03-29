import { useState } from 'react'
import './App.css'
import PropAsChildren from './component/PropAsChildren'
import PropsAsFunction from './component/PropsAsFunction'
function App() {

  const[count,setCount]=useState(0);

  function clickCount(){
    setCount(count+1);
  }

  return (
    <>
  
    <PropAsChildren>
      <h1>Hello Priyanshu Vatsal</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id voluptatem deserunt quidem! Molestiae explicabo, ea eligendi beatae dolore aspernatur.</p>
    </PropAsChildren>

    <PropsAsFunction clickCount={clickCount}>
      <p>{count}</p>
      <button>Increase</button>
    </PropsAsFunction>
    </>
  )
}

export default App
