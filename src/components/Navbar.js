import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="header">
          <h1>Bookstore CMS</h1>
        </div>
        <div className="nav">
          <NavLink to="/" className="navlink">
            BOOKS
          </NavLink>
          <NavLink to="/categories" className="navlink">
            CATEGORIES
          </NavLink>
          <NavLink to="/account" className="account">
            <span class="material-icons-sharp"> person </span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
