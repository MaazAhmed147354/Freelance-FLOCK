function MenuPreview() {
  const dishes = [
    { id: 1, name: "Cheese Burger", price: "$8.99", img: "/burger.jpg" },
    {
      id: 2,
      name: "Pepperoni Pizza",
      price: "$12.99",
      img: "/pizza.jpg",
    },
    { id: 3, name: "Pasta Alfredo", price: "$10.99", img: "/pasta.jpg" },
  ];

  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Popular Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={dish.img}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{dish.name}</h3>
              <p className="text-gray-600">{dish.price}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuPreview;
