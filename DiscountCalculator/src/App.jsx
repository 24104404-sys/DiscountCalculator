import { useState } from "react";

export default function DiscountCalculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const discountAmount =
    (Number(price) * Number(discount)) / 100;

  const finalPrice = Number(price) - discountAmount;

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Discount Calculator</h2>

      <label>Original Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
        style={{ display: "block", width: "100%", margin: "8px 0 16px" }}
      />

      <label>Discount (%)</label>
      <input
        type="number"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="Enter discount"
        style={{ display: "block", width: "100%", margin: "8px 0 16px" }}
      />

      {price && discount && (
        <div>
          <p>Discount Amount: ₹{discountAmount.toFixed(2)}</p>
          <h3>Final Price: ₹{finalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

