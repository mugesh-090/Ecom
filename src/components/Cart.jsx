import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="container mt-5">
      <h3>Cart Items 🛒</h3>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="border p-2 mb-2">
            <h5>{item.name}</h5>
            <p>Price: ${item.price}</p>
            <img src="../" alt="" />
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;