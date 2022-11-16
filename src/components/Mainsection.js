import React from "react";
import "./Mainsection.css";

export default function Mainsection() {
  return (
    <main className="main__section">
      <div className="Image__Product_section">
        <img
          className="main__big_product_image"
          src="images\image-product-1.jpg"
          alt="main_product__shoes_image"
        />

        <div className="four__small_product_image">
          <div className="small__product_image">
            <img
              className="small__image"
              src="images\image-product-1-thumbnail.jpg"
              alt="shoes__image_angle-1"
            />
            <div className="hover__white"></div>
          </div>
          <div className="small__product_image">
            <img
              className="small__image"
              src="images\image-product-2-thumbnail.jpg"
              alt="shoes__image_angle-2"
            />
            <div className="hover__white"></div>
          </div>
          <div className="small__product_image">
            <img
              className="small__image"
              src="images\image-product-3-thumbnail.jpg"
              alt="shoes__image_angle-3"
            />
            <div className="hover__white"></div>
          </div>
          <div className="small__product_image">
            <img
              className="small__image"
              src="images\image-product-4-thumbnail.jpg"
              alt="shoes__image_angle-4"
            />
            <div className="hover__white"></div>
          </div>
        </div>
      </div>
      <div className="product__description">product__description </div>
    </main>
  );
}
