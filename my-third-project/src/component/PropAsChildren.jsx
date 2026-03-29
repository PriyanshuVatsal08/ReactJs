import React from 'react'

const PropAsChildren = (props) => {
  return (
    <div style={{border:"2px solid black", padding:"20px"}}>
      {props.children}
    </div>
  )
}

export default PropAsChildren
