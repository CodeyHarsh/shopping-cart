import React from "react";
import { Usecart } from "../contexts/CartProvider";
function Product({ title, img, price, id }) {
  const { CallDispatch} = Usecart();
  function handleADD() {
  const newCartItem = {
    id: id,
    price: price,
    title: title,
    img: img,
    quantity: 1,
  };
  CallDispatch(newCartItem);
}
  
  return (
    <div className="Product">
      <img src={img} height={200} />
      <p>id:{id}</p>
      <p>Title:{title}</p>
      <p>Price:{price}</p>
      <button onClick={handleADD}>Add to Cart</button>
    </div>
  );
}

export default Product;
