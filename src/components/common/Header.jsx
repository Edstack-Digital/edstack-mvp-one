// import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import DarkModeToggle from "../UI/DarkModeToggle";
import { MdLogout } from "react-icons/md";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/signin");
    }
  };

  const getInitials = (name) => {
    return name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  // const handleLogout() {

  // }

  return (
    <nav className="flex items-center justify-between bg-[#1D1E2F] px-5 py-4 lg:py-2 font-[Satoshi] text-white lg:px-16">
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
          className="hidden h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white lg:flex"
        >
          {user ? (
            getInitials(user.name)
          ) : (
            <img
              src="/avatar.png"
              alt="Default Avatar"
              className="h-8 w-8 rounded-full"
            />
          )}
        </button>
        <div className="hidden lg:flex">
          <DarkModeToggle />
        </div>

        {isMenuOpen && (
          <div className="absolute right-28 top-16 z-50 w-36 rounded-lg border-2 border-blue-500 bg-white p-4 text-center text-[#1D1E2F] shadow-lg dark:border-gray-500 dark:bg-black dark:text-white">
            {/* <div className="mb-4 flex items-center rounded-full bg-gray-700 p-2 lg:hidden">
              <input
                type="text"
                placeholder="Search course"
                className="bg-transparent px-1 text-sm text-white placeholder-gray-400"
              />
              <FiSearch className="cursor-pointer text-white" />
            </div> */}

            <div>
              <Link to="/tutor" className="block rounded-lg py-2">
                Book a Tutor
              </Link>
              <Link to="/mock" className="block rounded-lg py-2">
                Mock Test
              </Link>
              <Link
                to="https://chat.whatsapp.com/BUwJaMkbSzl9lHlidEgiq1"
                target="_blank"
                className="block rounded-lg py-2"
              >
                Community
              </Link>
              <Link
                to="https://edstackhq.substack.com/"
                className="block rounded-lg py-2"
              >
                Blog
              </Link>
              <Link
                to="/"
                className="block rounded-lg py-2"
              >
                <div className="flex justify-center items-center text-red-500 gap-2">
                  <span>
                    <MdLogout />
                  </span>
                  <span>Log out</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
