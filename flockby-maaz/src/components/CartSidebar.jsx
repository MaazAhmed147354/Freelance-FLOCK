import React from "react";
import { useCart } from "../context/CartContext";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          ✕
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[70%]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.qty} × ${item.price}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-4 border-t">
          <p className="font-semibold mb-2">
            Total: $
            {cartItems.reduce((acc, i) => acc + i.price * i.qty, 0).toFixed(2)}
          </p>
          <button
            onClick={clearCart}
            className="w-full py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 mb-2"
          >
            Clear Cart
          </button>
          <a
            href="/checkout"
            className="block w-full py-2 text-center bg-yellow-500 text-white rounded-xl hover:bg-yellow-600"
          >
            Checkout
          </a>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
