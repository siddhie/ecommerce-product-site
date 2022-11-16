import React from "react";
import "./Mainsection.css";
import Productimage from "./Productimage";

export default function Mainsection() {
  return (
    <main className="main__section">
      <Productimage />
      <div className="product__description">product__description </div>
    </main>
  );
}
