// import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("John Doe"); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/signin"); 
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <nav className="flex items-center font-[Satoshi] justify-between bg-[#1D1E2F] px-16 py-2 text-white">
      
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/logo.png" alt="edstack logo" className="h-6 sm:h-6" />
        </Link>
      </div>

      
      <div className="mx-4 hidden w-1/3 items-center space-x-2 rounded-full border border-white bg-[#1D1E2F] p-1 lg:flex">
        <input
          type="text"
          placeholder="Search course"
          className="w-full border-none bg-transparent px-1 text-sm text-white placeholder-gray-400"
        />
        <FiSearch className="size-7 cursor-pointer rounded-full bg-[#0077CC] p-0.5 text-white" />
      </div>

      
      <div className="flex items-center space-x-4">
       
        <button
          className="text-2xl focus:outline-none"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        
        <button
          onClick={handleProfileClick}
          className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold"
        >
          {isLoggedIn ? (
            getInitials(userName) 
          ) : (
            <img
              src="/avatar.png"
              alt="Profile Avatar"
              className="w-8 h-8 rounded-full"
            />
          )}
        </button>

      
        {isMenuOpen && (
          <div className="absolute right-4 top-16 z-50 w-48 rounded-lg bg-white p-4 text-center text-[#1D1E2F] shadow-lg">
            
            <div className="mb-4 flex items-center rounded-full bg-gray-700 p-2 lg:hidden">
              <input
                type="text"
                placeholder="Search course"
                className="bg-transparent px-1 text-sm text-white placeholder-gray-400"
              />
              <FiSearch className="cursor-pointer text-white" />
            </div>

            
            <div>
              <Link to="/tutor" className="block rounded-lg py-2">
                Book a Tutor
              </Link>
              <Link to="/mock" className="block rounded-lg py-2">
                Mock Test
              </Link>
              <Link to="/community" className="block rounded-lg py-2">
                Join the Community
              </Link>
              <Link to="/blog" className="block rounded-lg py-2">
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
