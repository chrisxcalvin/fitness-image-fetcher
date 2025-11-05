import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">FitGallery</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/about" className="hover:text-gray-200">About</Link>
        <Link to="/contact" className="hover:text-gray-200">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
