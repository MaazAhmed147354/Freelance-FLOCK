import React, { useState } from "react";
import ItemModal from "./Modals/ItemModal";

const ItemCard = ({ addToCart, image, name, description, price }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = (item) => {
    setSelectedItem(item);
    setQuantity(1);
    setModalOpen(true);
  };

  return (
    <div className="bg-white h-full rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-xl mb-3"
      />
      <h3 className="text-lg font-semibold text-black">{name}</h3>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
      <p className="text-primary font-bold mt-2">${price}</p>
      <button
        onClick={handleAddClick}
        className="mt-3 bg-yellow-500 text-black px-10 py-2 rounded-xl hover:bg-primary/90"
      >
        Add
      </button>

      <ItemModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        item={name}
        price={price}
        quantity={quantity}
        description={description}
        image={image}
        setQuantity={setQuantity}
        onAdd={addToCart}
      />
    </div>
  );
};

export default ItemCard;
