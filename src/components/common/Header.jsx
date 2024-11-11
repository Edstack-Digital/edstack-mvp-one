// import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center font-[Satoshi] justify-between bg-[#1D1E2F] px-16 py-2 text-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/logo.png" alt="edstack logo" className="h-6 sm:h-6" />
        </Link>
      </div>

      {/* Search Bar (Shorter width) */}
      <div className="mx-4 hidden w-1/3 items-center space-x-2 rounded-full border border-white bg-[#1D1E2F] p-1 lg:flex">
        <input
          type="text"
          placeholder="Search course"
          className="w-full border-none bg-transparent px-1 text-sm text-white placeholder-gray-400"
        />
        <FiSearch className="size-7 cursor-pointer rounded-full bg-[#0077CC] p-0.5 text-white" />
      </div>

      {/* Profile & Hamburger Menu */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu - Visible on all screen sizes */}
        <button
          className="text-2xl focus:outline-none"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Profile Icon */}
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white">
          IP
        </div>

        {/* Dropdown Menu (Visible on click) */}
        {isMenuOpen && (
          <div className="absolute right-4 top-16 z-50 w-48 rounded-lg bg-white p-4 text-center text-[#1D1E2F] shadow-lg">
            {/* Search Bar for Mobile View */}
            <div className="mb-4 flex items-center rounded-full bg-gray-700 p-2 lg:hidden">
              <input
                type="text"
                placeholder="Search course"
                className="bg-transparent px-1 text-sm text-white placeholder-gray-400"
              />
              <FiSearch className="cursor-pointer text-white" />
            </div>

            {/* Navigation Links */}
            <div>
              <Link to="/hosting" className="block rounded-lg py-2">
                Book a Tutor
              </Link>
              <Link to="/hosting" className="block rounded-lg py-2">
                Mock Test
              </Link>
              <Link to="/hosting" className="block rounded-lg py-2">
                Community
              </Link>
              <Link to="/hosting" className="block rounded-lg py-2">
                Blog (coming soon)
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
