import InputField from './component/InputField'
import './App.css'
import { useState } from 'react'

function App() {
  const[name,setName]=useState('');
  return (
    <>
      <InputField title="Card 1" name={name} setName={setName}></InputField>
      <InputField title="Card 2" name={name} setName={setName}></InputField>
    </>
  )
}

export default App
