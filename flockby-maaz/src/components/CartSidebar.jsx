import { X } from "lucide-react";

const CartSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 z-[90] h-full w-80 max-w-[85vw] bg-white text-black shadow-2xl transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-bold">Your Cart</h3>
        <button onClick={onClose} className="p-2 rounded hover:bg-black/5">
          <X size={18} />
        </button>
      </div>

      <div className="p-4">
        {/* TODO: hook to real cart items */}
        <p className="text-gray-600">Your cart is empty.</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
        <button
          className="w-full rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-black/90 transition disabled:opacity-50"
          disabled
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
