import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__part-1">
        <div className="logo__main">
          <img src="images/logo.svg" className="company__logo" />
        </div>
        <div className="menubar__options">
          <ul className="Menubar__lists">
            <li className="menu__list">Collections</li>
            <li className="menu__list">Men</li>
            <li className="menu__list">Women</li>
            <li className="menu__list">About</li>
            <li className="menu__list">Contact</li>
          </ul>
        </div>
      </div>

      <div className="navbar__part-2">
        <div className="navbar__cart">
          <img className="cart" src="images/icon-cart.svg" alt="cart__icon" />
        </div>
        <div className="navbar__profile">
          <img
            className="avatar "
            src="images/image-Avatar.png"
            alt="Avatar__image"
          />
        </div>
      </div>
    </nav>
  );
}
