import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/" className="logo">
          <p>Hotel</p>
        </NavLink>
        <ul className="menu" style={{ fixed: "top" }}>
          <li>
            <NavLink activeClassName="menu_active" className="nav-link" to="/">
              <a>Home</a>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/rooms"
            >
              <a>Rooms</a>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/about"
            >
              <a>About</a>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/contact"
            >
              <a>Contact</a>
            </NavLink>
          </li>
        </ul>
        <button className="but1">Log in</button>
        <button className="but2">Sign up</button>
      </div>
    </>
  );
};

export default Navbar;
