import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header id='header'>
      <div className='header-center'>
        <h1>Recipe Finder</h1>
      <nav className='login-signup'>
      <Link className='signup-btn nav-link' to="/signup">Sign-up</Link>  |  <Link className='login-btn nav-link' to='/login'>Login</Link>
      </nav>
        <nav>
          <Link className='nav-link' to="/">Discover Recipes</Link>  |  <Link className='nav-link' to='/favorites'>Favorites</Link>
        </nav>
      </div>
    </header>
  )
}


export default Header