import React, { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f6f6f6",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Checkout
        </h2>

        {/* DELIVERY DETAILS */}
        <div style={{ marginBottom: "20px" }}>
          <h4>Delivery Details</h4>
          <input style={inputStyle} placeholder="Full Name" />
          <input style={inputStyle} placeholder="Address" />
          <input style={inputStyle} placeholder="City" />
          <input style={inputStyle} placeholder="Phone Number" />
        </div>

        {/* PAYMENT METHOD */}
        <div style={{ marginBottom: "20px" }}>
          <h4>Payment Method</h4>

          <label style={radioStyle}>
            <input
              type="radio"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            <span style={{ marginLeft: "10px" }}>
              Cash on Delivery (COD)
            </span>
          </label>

          <label style={radioStyle}>
            <input type="radio" disabled />
            <span style={{ marginLeft: "10px", color: "#aaa" }}>
              Online Payment (Coming Soon)
            </span>
          </label>
        </div>

        {/* PLACE ORDER */}
        <button
          style={{
            width: "100%",
            padding: "14px",
            background: "#ff4141",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Order Placed Successfully!")}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

/* ---------- Styles ---------- */
const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "8px 0",
  borderRadius: "5px",
  border: "1px solid #ddd",
  outline: "none",
};

const radioStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
  cursor: "pointer",
};

export default Checkout;
