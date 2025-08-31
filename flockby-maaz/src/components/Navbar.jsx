import React from "react";

const Navbar = () => {
  const sections = [
    "Starters",
    "Main Course",
    "Desserts",
    "Beverages",
    "Salads",
  ];

  return (
    <nav className="sticky top-0 z-20 bg-white shadow-md py-3">
      <ul className="flex justify-center gap-6 text-gray-700 font-medium">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase().replace(" ", "-")}`}
              className="hover:text-primary transition-colors"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
