import React from "react";
import { Usecart } from "../contexts/CartProvider";
function CartItem({ id, title, price, quantity, img }) {
  const { increaseQty, DecreasesQty, Remove } = Usecart();
  return (
    <div className="cartItem">
      <p>id:{id}</p>
      <p>Title:{title}</p>
      <p>Price:{price * quantity}</p>
      <p>quantity:{quantity}</p>
      <p>img:{img}</p>
      <button
        onClick={() => {
          return increaseQty(id);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          if (quantity <= 1) {
            return;
          }
          return DecreasesQty(id);
        }}
      >
        Decreases
      </button>
      <button
        onClick={() => {
          return Remove(id);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
