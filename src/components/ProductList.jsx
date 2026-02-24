import React, { useState, useContext } from "react";
import products from "../Data/product.js";
import { CartContext } from "../context/CartContext";

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useContext(CartContext);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div>
      <h2>Products</h2>

      <div>
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("mobile")}>Mobile</button>
        <button onClick={() => setSelectedCategory("sports")}>Sports</button>
        <button onClick={() => setSelectedCategory("gadgets")}>Gadgets</button>
        <button onClick={() => setSelectedCategory("groceries")}>Groceries</button>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={product.image} alt={product.name} width="100" />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <p>Category: {product.category}</p>

            <button onClick={() => {
              addToCart(product);
              alert("Product added to cart");
            }}>
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;