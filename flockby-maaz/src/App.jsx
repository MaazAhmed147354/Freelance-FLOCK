import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home } from "./pages";
import { CartProvider } from "./context/CartContext";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    setCartItems((prev) => {
      // check if item already exists
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((i) => i.name !== name));
  };

  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-black text-white">
          {/* Header always visible */}
          <Header cartItems={cartItems} removeFromCart={removeFromCart} />

          {/* Page content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home addToCart={addToCart} />} />
              {/* <Route path="/checkout" element={<Checkout />} /> */}
            </Routes>
          </main>

          {/* Footer always visible */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
