import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./components/Productdes.css";

import Productimage from "./components/Productimage";

function App() {
  const [count, setCount] = useState(0);
  const [appear, setAppear] = useState(false);
  const [update, setUpdate] = useState(0);
  const [showcartDetails, setshowcartDetails] = useState(false);

  function updateNumber() {
    setUpdate(count);
    if (count > 0) {
      setAppear(true);
    } else {
      setAppear(false);
    }
  }

  function handleMouseEnter() {
    console.log("mouse enter");

    if (update <= 0) {
      setshowcartDetails(true);
    }
  }

  function handleMouseLeave() {
    setshowcartDetails(false);
  }
  return (
    <div className="App">
      <Navbar
        update={update}
        appear={appear}
        handleMouseEnter={handleMouseEnter}
        showcartDetails={showcartDetails}
        handleMouseLeave={handleMouseLeave}
      />

      <main className="main__section">
        <Productimage />
        <div className="product__description">
          <p className="sneaker__company"> SNEAKER COMPANY </p>
          <h1 className="title__shoes"> Fall Limited Edition Sneakers</h1>
          <p className="para__design">
            These low-profile sneakers are your perfect casual wear
            companion.eaturing a durable rubber outer sole, they'll withstand
            everything the weather can offer.
          </p>
          <div className="price__display">
            <p className="discount__price"> $125.00 </p>
            <p className="discount__tag"> 50% </p>
          </div>
          <p className="actual__price">$250.00 </p>
          <div className="add_to_cart_section">
            <div className="number_of_products">
              <button
                onClick={() => {
                  if (count > 0) setCount(count - 1);
                }}
                className="decrease"
              >
                <img src="images\icon-minus.svg" />
                <div className="plus__minus__hover"></div>
              </button>
              <p className="number">{count}</p>
              <button onClick={() => setCount(count + 1)} className="increase">
                <img src="images\icon-plus.svg"></img>{" "}
                <div className="plus__minus__hover"></div>
              </button>
            </div>
            <div onClick={() => updateNumber()} className="addto_cart__btn">
              <span className="cart__icon">
                <img
                  className="cart__white"
                  src="images\icon-cart-white.svg"
                ></img>
              </span>
              Add to Cart
              <div className="addto_cart__btn_hover"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
