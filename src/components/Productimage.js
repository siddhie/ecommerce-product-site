import React, { useState } from "react";

import "./Productimage.css";

export default function Productimage() {
  const bigImagesProduct = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];
  const imagePath = [
    "images/image-product-1-thumbnail.jpg",
    "images/image-product-2-thumbnail.jpg",
    "images/image-product-3-thumbnail.jpg",
    "images/image-product-4-thumbnail.jpg",
  ];
  const [productImage, setProductImage] = useState(bigImagesProduct[0]);
  const arr = [0, 1, 2, 3];

  function handleOnClick(num) {
    setProductImage(bigImagesProduct[num]);
  }

  return (
    <div className="Image__Product_section">
      <img
        className="main__big_product_image"
        src={productImage}
        alt="main_product__shoes_image"
      />

      <div className="four__small_product_image">
        {arr.map((num, key) => (
          <div key={key} className="small__product_image">
            <input
              type="radio"
              name="rate"
              id={num}
              className="radiobtn"
              autoComplete="off"
            />

            <label className="radioValue" htmlFor={num}>
              <img
                className="small__image"
                alt="shoes__image_angle-1"
                src={imagePath[num]}
              />

              <div
                onClick={() => handleOnClick(num)}
                className="hover__white"
              ></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
