import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')", // Place hero-food.jpg in public/assets
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Delicious food, delivered fast 🚀
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your favorite meals at your doorstep
        </p>
        <Link
          to="/delivery"
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-lg font-semibold transition"
        >
          Order Now
        </Link>
      </div>
    </section>
  );
}

export default Hero;
