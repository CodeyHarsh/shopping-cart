import "./App.css";
import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";
import Header from "./components/header";
function App() {
  return (
    <CartProvider>
      <Header />
      <Products />
    </CartProvider>
  );
}

export default App;
