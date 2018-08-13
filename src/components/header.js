import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      {/* <Link to="/"> <img src={logo} width="30"/> </Link> */}
      <Link to="/"> <img src={require('../images/logo-designcode.svg')} width="30"/> </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/dowloads">Downloads</Link>
      <Link to="/workshops">workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
    
  </div>
)

export default Header
