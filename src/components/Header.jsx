import Model from "./ui/model";
import { useEffect, useState } from "react";
import Cart from "./Cart";
function Header() {
  function closeModel() {
    setModelOPen(false);
  }
  const [isModelopen, setModelOPen] = useState(false);
  useEffect(() => {
    if (isModelopen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModelopen]);
  return (
    <header>
      <nav>
        <h1 className="logo">Arc Shop</h1>
        <button
          onClick={() => {
            setModelOPen(true);
          }}
        >
          Cart
        </button>
      </nav>
      {isModelopen && (
        <Model closeModel={closeModel}>
          <Cart />
        </Model>
      )}
    </header>
  );
}

export default Header;
