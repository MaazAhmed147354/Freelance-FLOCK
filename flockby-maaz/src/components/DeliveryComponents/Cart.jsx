import { Link } from "react-router-dom";

function Cart({
  cartItems,
  updateQuantity,
  removeItem,
  total,
  proceedToCheckout,
}) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-300 rounded"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-2 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="border-t pt-4 flex justify-between font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link to={"/checkout"}>
            <button
              onClick={proceedToCheckout}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
