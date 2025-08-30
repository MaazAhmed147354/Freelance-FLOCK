import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="bg-blue-600 text-white py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Join FlockByMaaz today & get 20% off your first order!
      </h2>
      <p className="mb-6">Sign up and enjoy exclusive offers & rewards.</p>
      <Link
        to="/account"
        className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-lg font-semibold transition"
      >
        Sign Up Now
      </Link>
    </section>
  );
}

export default CTASection;
