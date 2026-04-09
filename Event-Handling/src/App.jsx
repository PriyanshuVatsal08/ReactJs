
import './App.css'

function App() {

  function handleClick(){
    alert("I am clicked");
  }

  function handleMouseOver(){
    alert("Para k upar mouse lekar aaye ho!!")
  }

  function handleInputChange(e){
    console.log("Value till now "+e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

    alert("Form submit")
  }

  return (
    <>
    <div>

      <button onClick={()=>alert("Button Click")}>Click me</button>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' 
        onChange={handleInputChange}/>

        <button type='submit'>Submit</button>
      </form>

      <p onMouseOver={handleMouseOver} style={{color:"red", border:"2px"}}>I am a para</p>

      <button onClick={handleClick}>
        Click me
      </button>

    </div>
    </>
  )
}

export default App
