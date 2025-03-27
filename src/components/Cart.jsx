import React from 'react'
import { Usecart } from '../contexts/CartProvider'
import CartItem from './cartItem'
function Cart() {
  const{cart}=Usecart()
  return (
    <div>{cart.map((cartItem)=>{
      return <CartItem key={cartItem.id}{...cartItem}/>
    })}</div>
  )
}

export default Cart
