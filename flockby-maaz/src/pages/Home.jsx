import React from "react";
import { HeroSection } from "../components";
import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";

const sampleItems = [
  {
    image: "/burger.jpg",
    name: "Chicken Burger",
    description: "Delicious sample description",
    price: 10,
  },
  {
    image: "/pizza.jpg",
    name: "Pepperoni Pizza",
    description: "Tasty and fresh",
    price: 12,
  },
  {
    image: "/pasta.jpg",
    name: "Alfredo Pasta",
    description: "Chef’s special recipe",
    price: 15,
  },
];

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Sections */}
      <div className="p-6 space-y-16 bg-yellow-500">
        {["Starters", "Main Course", "Desserts", "Beverages", "Salads"].map(
          (section) => (
            <section
              key={section}
              id={section.toLowerCase().replace(" ", "-")}
              className="scroll-mt-20 bg-black/70 p-10 rounded-2xl"
            >
              <h2 className="text-2xl font-bold mb-6">{section}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sampleItems.map((item, index) => (
                  <ItemCard key={index} {...item} />
                ))}
              </div>
            </section>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
