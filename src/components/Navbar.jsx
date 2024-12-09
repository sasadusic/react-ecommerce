import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="side">
          <nav className="nav">
                <NavLink className={({ isActive}) => (isActive ? 'active-link link' : 'link')}  to="/">Home</NavLink>

                <NavLink className={({ isActive}) => (isActive ? 'active-link link' : 'link')}  to="/bucket">Bucket</NavLink>

                <NavLink className={({ isActive}) => (isActive ? 'active-link link' : 'link')}  to="/profile">Profile</NavLink>
      
          </nav>
        </div>
  )
}

export default Navbar