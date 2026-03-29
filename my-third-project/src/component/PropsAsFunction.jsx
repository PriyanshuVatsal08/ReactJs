import React from 'react'

const PropsAsFunction = (props) => {
  return (
    <div style={{margin:"20px"}}>
      <button onClick={props.clickCount}>
        {props.children}
      </button>
    </div>
  )
}

export default PropsAsFunction
