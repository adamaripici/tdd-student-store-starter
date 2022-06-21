import * as React from "react"
import "./ProductGrid.css"
import ProductCard from '../ProductCard/ProductCard'

export default function ProductGrid({products =[], handleAddItemToCart, handleRemoveItemToCart}) {
    return (
      <div id = "Buy" className="product-grid">
        <div className="content">
          <h3>Best Selling Products</h3>
          <div className="grid">
            {products.map((product) => {
              return (
                <ProductCard
                key={product.id}
                product={product}
              /> 
              )
            })}
            
          </div>
        </div>
      </div>
    )
  }