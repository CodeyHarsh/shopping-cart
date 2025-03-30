import { createContext, useContext, useReducer } from "react";
function Cartreducer(cart, action) {
  switch (action.type) {
    case "Add_Item": {
      return [...cart, action.payload];
    }
    case "increase_Qty": {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
    case "Decreases_Qty": {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
    case "Remove_Qty": {
      return cart.filter((item) => {
       return item.id !== action.payload.id;
      });
    }
  }
}

const Cartcontext = createContext();
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(Cartreducer, []);
  function CallDispatch(newCartItem) {
    dispatch({ type: "Add_Item", payload: newCartItem });
  }
  const increaseQty = (id) => {
    dispatch({ type: "increase_Qty", payload: { id: id } });
  };
  const DecreasesQty = (id) => {
    dispatch({ type: "Decreases_Qty", payload: { id: id } });
  };
  const Remove = (id) => {
    dispatch({ type: "Remove_Qty", payload: { id: id } });
  };
  return (
    <Cartcontext.Provider
      value={{
        cart,
        CallDispatch,
        increaseQty,
        DecreasesQty,
        Remove,
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
