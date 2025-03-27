import React from 'react'

function CartItem({id,title,price,quantity,img}) {
  return (
    <div className="cartItem">
      <p>id:{id}</p>
      <p>Title:{title}</p>
      <p>Price:{price}</p>
      <p>quantity:{quantity}</p>
      <p>img:{img}</p>
    </div>
  )
}

export default CartItem
