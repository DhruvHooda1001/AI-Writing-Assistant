import { FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-800 text-white py-4 px-6">
      <div className="container mx-auto flex  items-center">
        <div className="flex items-center space-x-2 px-8">
          <FiBookOpen className="text-4xl" />
          <p className="text-white font-bold text-xl ml-4 ">AI Writing Assistant</p>
        </div>
        <div className="hidden md:flex w-full justify-between items-center py-2">
          <div >
            <Link
              to="/"
              className="text-black font-bold bg-white border-1 border-green-900 py-2 px-4 rounded-xl m-3"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black font-bold bg-white border-1 border-green-900 py-2 px-4 rounded-xl "
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="/write"
              className="bg-green-400 border-1 border-green-900 px-5 py-3 rounded-xl font-bold text-xl"
            >
              Write
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
