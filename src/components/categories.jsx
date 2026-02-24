import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../Data/product.js";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 🔥 Use global cart from Context
  const { addToCart } = useContext(CartContext);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Category Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedCategory("all")}
                    >
                      All
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedCategory("mobile")}
                    >
                      Mobile
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedCategory("sports")}
                    >
                      Sports
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedCategory("gadgets")}
                    >
                      Gadgets
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedCategory("groceries")}
                    >
                      Groceries
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Products Grid */}
      <div className="container mt-4">
        <div className="row">
          {filteredProducts.map((item) => (
            <div className="col-md-4 mb-3" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Category: {item.category}</p>
                  <img
                    style={{ height: "200px", width: "200px" }}
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="d-flex justify-content-center mt-3">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        addToCart(item);
                        alert("Product added to cart");
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;