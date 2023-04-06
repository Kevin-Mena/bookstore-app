import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="logo">
        <h1>Bookstore CMS</h1>
      </div>
      <div className="nav">
        <NavLink to="/" className="navlink-books">
          BOOKS
        </NavLink>
        <NavLink to="/categories" className="navlink-categories">
          CATEGORIES
        </NavLink>
        <NavLink to="/account" className="account">
          <span className="material-icons-sharp"> person </span>
        </NavLink>
      </div>
    </nav>
  </>
);

export default Navbar;
