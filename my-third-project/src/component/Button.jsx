import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.clickHandler}>
    click me
   </button>
    </div>

  )
}

export default Button
