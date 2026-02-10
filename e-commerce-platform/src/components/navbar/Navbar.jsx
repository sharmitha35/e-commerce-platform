import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">E-Shop</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;