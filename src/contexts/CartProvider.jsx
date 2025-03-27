import { createContext, useContext, useReducer } from "react";
function Cartreducer(cart, action) {
switch(action.type){
    case "Add_Item":{
        return [...cart, action.payload];
    }
    
}
}

const Cartcontext = createContext();
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(Cartreducer, []);
  function CallDispatch(newCartItem){
    dispatch({type:"Add_Item",payload:newCartItem})
  }
  return (
    <Cartcontext.Provider
      value={{
        cart,
        CallDispatch,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
}
export function Usecart() {
  return useContext(Cartcontext);
}
export default CartProvider;
