import React from 'react'

const InputField = (props) => {
  return (
    <div>
      <input type="text"  onChange={(e)=> props.setName(e.target.value)}/>
      <p>Child Input field: {props.name}</p>
    </div>
  )
}

export default InputField
