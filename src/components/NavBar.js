import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <li>
        <NavLink to="/">Home</NavLink> <br />
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink> <br />
      </li>
      <li>
        <NavLink to="/directors">Directors</NavLink> <br />
      </li>
      <li>
        <NavLink to="/actors">Actors</NavLink>
      </li>
    </div>
  );
};

export default NavBar;
