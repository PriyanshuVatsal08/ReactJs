import logo from "../assets/logo.png"

import "./Navbar.css"

const Navbar = (props) => {
  return (
    <>
    <div>
      {props.name}
      {props.children}
    </div>
    </>
  )
}

export default Navbar
