import React from "react";
import { motion } from "framer-motion";

const ItemModal = ({
  isOpen,
  onClose,
  item,
  price,
  description,
  image,
  quantity = 1,
  setQuantity,
  onAdd,
}) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl shadow-xl w-[90%] md:w-[500px] p-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        {/* Item Image */}
        <img
          src={image}
          alt={item}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />

        {/* Item Details */}
        <h2 className="text-2xl font-bold text-red-500">{item}</h2>
        <p className="text-gray-600 my-2">{description}</p>
        <p className="text-lg font-semibold text-gray-800 mb-4">
          ${price}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="bg-gray-200 px-3 py-1 rounded-lg text-xl"
          >
            -
          </button>
          <span className="text-lg text-black">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-200 px-3 py-1 rounded-lg text-xl"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => {
            onAdd(item, quantity);
            onClose();
          }}
          className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
      </motion.div>
    </div>
  );
};

export default ItemModal;
