import { useState } from "react";
import { MenuItem, Cart } from "../components";

function Delivery() {
  // Mock menu data
  const menu = [
    {
      id: 1,
      name: "Cheese Burger",
      desc: "Juicy beef patty with cheese",
      price: 8.99,
      img: "/burger.jpg",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      desc: "Classic pizza with pepperoni",
      price: 12.99,
      img: "/pizza.jpg",
    },
    {
      id: 3,
      name: "Pasta Alfredo",
      desc: "Creamy alfredo pasta",
      price: 10.99,
      img: "/pasta.jpg",
    },
    {
      id: 4,
      name: "Chicken Wings",
      desc: "Crispy spicy wings",
      price: 7.99,
      img: "/wings.jpg",
    },
  ];

  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Update quantity
  const updateQuantity = (id, newQty) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: newQty } : i))
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handle checkout
  const proceedToCheckout = () => {
    setCheckout(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Menu */}
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {menu.map((item) => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart */}
      <div>
        <Cart
          cartItems={cart}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
          total={total}
          proceedToCheckout={proceedToCheckout}
        />
      </div>
    </div>
  );
}

export default Delivery;
