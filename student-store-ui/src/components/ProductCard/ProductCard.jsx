import * as React from "react"
import "./ProductCard.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function ProductCard({product,productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
  return (
    <div className="product-card">
      <Link to={product.name} className = "media">
        <img src={product.image} ></img>
      </Link>
      <div className="main-info">
        <p className = "product-name">{product.name}</p>
        <p className = "product-price">${product.price.toFixed(2)}</p>
      </div>
      
    </div>
  )
}
