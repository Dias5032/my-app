import React from "react";
import "./Card.css";

const Card = ({ product, index, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-price">{product.price} ₸</div>
      <div className="product-name">
        {index + 1}. {product.name}
      </div>
      <button className="add-button" onClick={onAddToCart}>
        В корзину
      </button>
    </div>
  );
};

export default Card;
