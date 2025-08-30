import { Link } from "react-router-dom";

function ReviewPreview() {
  const reviews = [
    {
      id: 1,
      name: "Ali",
      text: "Amazing food and super fast delivery!",
      stars: 5,
    },
    {
      id: 2,
      name: "Sara",
      text: "Loved the pizza, will order again.",
      stars: 4,
    },
  ];

  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <div key={r.id} className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic mb-2">"{r.text}"</p>
            <p className="font-semibold">- {r.name}</p>
            <p className="text-yellow-500">
              {"⭐".repeat(r.stars)}
              {"☆".repeat(5 - r.stars)}
            </p>
          </div>
        ))}
      </div>
      <Link
        to="/reviews"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Read More Reviews
      </Link>
    </section>
  );
}

export default ReviewPreview;
