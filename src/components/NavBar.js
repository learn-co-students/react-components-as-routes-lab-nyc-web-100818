import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import Directors from './Directors'

import Actors from './Actors'

const NavBar = () => {
  return (
    <div>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/movies" exact>
        Movies
      </NavLink>
      <NavLink to="/directors" exact>
        Directors
      </NavLink>
      <NavLink to="/actors" exact>
        Actors
      </NavLink>
    </div>
  )
}

export default NavBar
