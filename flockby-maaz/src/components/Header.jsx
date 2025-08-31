import { useState, useMemo } from "react";
import { MapPin, Phone, ShoppingCart } from "lucide-react";
import LocationModal from "./Modals/LocationModal";
import CartSidebar from "./CartSidebar";

const Header = ({cartItems, removeFromCart}) => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  // Placeholder for future cart count from global state
  const cartCount = useMemo(() => 0, []);

  return (
    <>
      <header className="w-full h-24 bg-black text-white border-b-4 border-yellow-500 overflow-visible z-1">
        <div className="mx-auto flex max-w-full justify-between gap-3 px-4 py-3 md:px-6">
          {/* Left side */}
          <div className="flex mt-3 gap-3 sm:gap-5 w-82 h-fit">
            <button
              onClick={() => setLocationOpen(true)}
              className="flex items-center gap-2 rounded-full bg-yellow-500 p-3 text-xs font-semibold text-black hover:bg-yellow-300 transition sm:text-sm"
            >
              <MapPin size={16} />
              <span>{location ? location : "Select Location"}</span>
            </button>

            <a
              href="tel:+923001234567"
              className="flex items-center gap-2 rounded-full border-2 border-yellow-100 p-3 text-xs font-semibold hover:bg-yellow-500 hover:text-black transition sm:text-sm"
            >
              <Phone size={16} />
              <span>+92 300 1234567</span>
            </a>
          </div>

          {/* Center Logo (circle) */}
          <div className="flex items-center justify-center w-82">
            <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-35 md:w-35 rounded-full border-4 border-white bg-yellow-500 text-black shadow-lg flex items-center justify-center hover:shadow-yellow-200">
              <span className="text-center font-extrabold leading-[0.95] tracking-tight text-[10px] sm:text-xs md:text-sm">
                Flock
                <br />
                ByMaaz
              </span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex mt-4 justify-end w-82 h-fit">
            <button
              onClick={() => setCartOpen(true)}
              className="relative rounded-full bg-yellow-500 p-2 text-black hover:bg-yellow-400 transition"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Portals (inline for now) */}
      <LocationModal
        isOpen={locationOpen}
        value={location}
        onClose={() => setLocationOpen(false)}
        onSave={(val) => {
          setLocation(val);
          setLocationOpen(false);
        }}
      />

      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default Header;
