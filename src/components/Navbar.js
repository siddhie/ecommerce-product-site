import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({
  appear,
  update,
  handleMouseEnter,
  showcartDetails,
  handleMouseLeave,
  showCheckoutDetails,
}) {
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
        <div
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          className="navbar__cart"
        >
          <img className="cart" src="images/icon-cart.svg" alt="cart__icon" />
          {appear && <div className="product__number__design">{update}</div>}

          {showcartDetails && (
            <div className="cart__details__box">
              <p className="cart__title"> Cart </p>
              <hr className="hr" />

              <div className="checkout">
                {showCheckoutDetails ? (
                  <div className="checkout__details">
                    <div className="if_cart_has_something">
                      <img
                        src="images\image-product-1-thumbnail.jpg"
                        className="cart__detail__image"
                      />

                      <div className="cart__pricing_details">
                        <p className="fall__limited">
                          Fall Limited Edition Sneakers
                        </p>
                        <p className="total">
                          $125.00 x {update}
                          <span className="bold_span"> ${125 * update}.00</span>
                        </p>
                      </div>

                      <div className="delete__icon">
                        <i class="uil uil-trash-alt"></i>{" "}
                      </div>
                    </div>
                    <button className="checkout__btn">Checkout</button>
                  </div>
                ) : (
                  <div className="cart__empty"> Your cart is empty. </div>
                )}
              </div>
            </div>
          )}
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
