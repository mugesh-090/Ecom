import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/order.css";

const Order = () => {
  const { cart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setOrderPlaced(false);
  };

  const handleBuy = () => {
    setOrderPlaced(true);
  };

  return (
    <div>
      <h3>Orders</h3>

      <div className="orders" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {cart.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} style={{ border: "1px solid #ccc", padding: "15px" }}>
              <h5>{item.name}</h5>
              <p>Price: ${item.price}</p>
              <img
                src={item.image}
                alt=""
                style={{ height: "200px", width: "200px" }}
              />
              <br />

              <button
                className="btn btn-warning mt-2"
                onClick={() => handleOrderClick(item)}
              >
                Order Now
              </button>
            </div>
          ))
        )}
      </div>

      {/* Order Summary Section */}
      {selectedItem && (
        <div style={{ marginTop: "30px", padding: "20px", border: "2px solid green" }}>
          <h4>Order Summary</h4>
          <p>Product: {selectedItem.name}</p>
          <p>Total Amount: ${selectedItem.price}</p>

          {!orderPlaced ? (
            <button className="btn btn-success" onClick={handleBuy}>
              Buy Now
            </button>
          ) : (
            <h5 style={{ color: "green", marginTop: "10px" }}>
              ✅ Order Placed Successfully!
            </h5>
          )}
        </div>
      )}
    </div>
  );
};

export default Order;