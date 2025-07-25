import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-main'>
      <div className="nav-container">
        <div className="nav-container-left">
          <Link to='/'>
          <img src="/assets/Images/Symbols.png" alt="" /></Link>
        </div>
        <div className="nav-container-right">
          <div className="nav-links">
            <NavLink to='/' activeClassName="active">Explore</NavLink>
            <NavLink to='/search'>Search</NavLink>
            <NavLink to='/hotels'>Hotels</NavLink>
            <NavLink to='/offers'>Offers</NavLink>
          </div>
          <div className="nav-icons">
            <img src="/assets/Images/Vector.png" alt="" id='nav-vector'/>
            <img src="/assets/Images/profile picture.png" alt="" id='nav-profile'/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
