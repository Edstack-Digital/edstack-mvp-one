import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import DarkModeToggle from "../UI/DarkModeToggle";
import { MdLogout } from "react-icons/md";
import { SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";

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

  return (
    <nav className="flex items-center justify-between bg-[#1D1E2F] px-5 py-4 font-[Satoshi] text-white lg:px-16 lg:py-2">
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

        <div
          className={`fixed right-0 top-0 z-50 h-full w-64 bg-white p-4 text-[#1D1E2F] shadow-lg transition-transform duration-300 dark:bg-black dark:text-white lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col`}
        >
          {/* Close Button */}
          <button
            className="text-2xl text-[#1D1E2F] dark:text-white"
            onClick={handleMenuToggle}
          >
            <HiX />
          </button>

          {/* Menu Items */}
          <div className="mt-8 flex flex-grow flex-col items-end space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  `${user?.name?.split(" ")[0][0] ?? ""}${user?.name?.split(" ")[1]?.[0] ?? ""}`
                )}
              </div>
              <p className="font-semibold">{user?.name ?? "No User"}</p>
            </div>

            <div className="w-full border-t border-gray-300"></div>
            <Link
              to="https://chat.whatsapp.com/BUwJaMkbSzl9lHlidEgiq1"
              target="_blank"
              className="block rounded-lg py-2"
            >
              Join our Community
            </Link>
            <Link
              to="https://edstackhq.substack.com/"
              target="_blank"
              className="block rounded-lg py-2"
            >
              Subscribe to newsletter
            </Link>
            <Link
              to="https://edstackhq.substack.com/"
              target="_blank"
              className="block rounded-lg py-2"
            >
              Blog
            </Link>
          </div>

          {/* Footer Section */}
          <div className="flex flex-col items-end border-t border-gray-300 pt-4 dark:border-gray-600">
            <div className="mb-8 flex items-center">
              <img src="/ed.png" alt="edstack logo" className="h-10 sm:h-10" />
              <div className="flex-col text-right text-[#333333] dark:text-white">
                <div>EdStack Digital Ltd.</div>
                <div className="text-xs">Empowering students</div>
              </div>
            </div>

            <div className="mt-2 flex space-x-3">
              <Link to="https://www.youtube.com/@edstackhq" target="_blank">
                <SlSocialYoutube />
              </Link>
              <Link to="https://linkedin.com/company/edstackhq" target="_blank">
                <FaLinkedinIn />
              </Link>
              <Link to="https://instagram.com/edstackhq" target="_blank">
                <SlSocialInstagram />
              </Link>
              <Link to="https://tiktok.com/@edstackhq" target="_blank">
                <SiTiktok />
              </Link>
              <Link to="https://x.com/edstackhq" target="_blank">
                <RiTwitterXFill />
              </Link>
            </div>
            <p className="text-xs text-[#333333] dark:text-white">
              Data, Privacy & Protection Terms
            </p>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute right-28 top-16 z-50 hidden w-36 rounded-lg border-2 border-blue-500 bg-white p-4 text-center text-[#1D1E2F] shadow-lg dark:border-gray-500 dark:bg-black dark:text-white lg:block">
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
              <Link to="/" className="block rounded-lg py-2">
                <div className="flex items-center justify-center gap-2 text-red-500">
                  <MdLogout />
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
