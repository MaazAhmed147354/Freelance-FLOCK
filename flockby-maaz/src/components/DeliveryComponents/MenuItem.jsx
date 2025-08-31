function MenuItem({ item, addToCart }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
        <p className="text-blue-600 font-bold mt-2">{item.price}$</p>
        <button
          onClick={() => addToCart(item)}
          className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
