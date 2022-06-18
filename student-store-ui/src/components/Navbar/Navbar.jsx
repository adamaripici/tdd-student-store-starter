import * as React from "react"
import "./Navbar.css"
import {Link} from 'react-router-dom'
import Logo from '../Logo/Logo'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navigation">
        <div className="logo">
          <Logo>

          </Logo>
        </div>
        <ul className="link">
          <li>
          <Link to={"/#Home"}>Home</Link>
          </li>
          <li>
            <Link to={"/#About"}>About Us</Link>
          </li>
          <li>
            <Link to={"/#Contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/#Buy"}>Buy Now </Link>
          </li>
        </ul>
        
      </div>
      {/* <p>Navbar</p> */}
    </nav>
  )
}
