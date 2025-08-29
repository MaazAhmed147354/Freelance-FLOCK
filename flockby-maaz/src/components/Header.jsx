import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">FlockByMaaz</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/delivery">Delivery</Link>
        <Link to="/account">Account</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/reviews">Reviews</Link>
      </div>
    </nav>
  );
}

export default Header;
