import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header id='header'>
      <h1>Recipe Finder</h1>
      <nav>
        <Link className='nav-link' to="/">Discover Recipes</Link>  |  <Link className='nav-link' to='/favorites'>Favorites</Link>
      </nav>
    </header>
  )
}


export default Header