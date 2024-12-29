import { SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { FiBook, FiUser, FiUsers } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";

function Lower() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <footer className="text-white">
      <div className="hidden items-center justify-between bg-[#1D1E2F] px-10 py-8 font-[Satoshi] text-white lg:flex">
        <div className="flex items-center">
          <img src="/ed.png" alt="edstack logo" className="h-10 sm:h-10" />
          <div className="flex-col">
            <div>EdStack Digital Ltd.</div>
            <div>Empowering students</div>
          </div>
        </div>

        <div className="flex-col">
          <div className="flex justify-center space-x-4">
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
          <div className="text-center">Data, Privacy & Protection Terms</div>
        </div>

        <div className="flex-col text-right">
          <Link
            to="https://chat.whatsapp.com/BUwJaMkbSzl9lHlidEgiq1"
            target="_blank"
          >
            <div className="underline">Join Our Community!</div>
          </Link>
          <Link to="https://edstackhq.substack.com/">
            <div className="underline">Subscribe to our Newsletter</div>
          </Link>
        </div>
      </div>

      {/* Mobile Footer Navigation  */}
      <div className="fixed bottom-0 flex w-full items-center justify-around border-t-2  bg-white p-4 dark:bg-black lg:hidden">
        <Link to="/" className="flex flex-col items-center">
          <AiOutlineHome
            className={`text-3xl ${
              isActive("/") ? "text-[#0077CC]" : "text-black dark:text-white"
            }`}
          />
          <span
            className={`text-xs ${
              isActive("/") ? "text-[#0077CC]" : "text-black dark:text-white"
            }`}
          >
            Home
          </span>
        </Link>
        <Link to="/mock" className="flex flex-col items-center">
          <FiBook
            className={`text-3xl ${
              isActive("/mock") ? "text-[#0077CC]" : "text-black dark:text-white"
            }`}
          />
          <span
            className={`text-xs ${
              isActive("/mock") ? "text-[#0077CC]" : "text-black dark:text-white"
            }`}
          >
            Tests
          </span>
        </Link>
        <Link to="/tutor" className="flex flex-col items-center">
          <FiUsers
            className={`text-3xl ${
              isActive("/tutor") ? "text-[#0077CC]" : "text-black dark:text-white"
            }`}
          />
          <span
            className={`text-xs ${
              isActive("/tutor") ? "text-[#0077CC]" : "text-black dark:text-white"
            }`}
          >
            Tutors
          </span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center">
          <FiUser
            className={`text-3xl ${
              isActive("/profile") ? "text-[#0077CC]" : "text-black dark:text-white"
            }`}
          />
          <span
            className={`text-xs ${
              isActive("/profile") ? "text-[#0077CC]" : "text-black dark:text-white"
            }`}
          >
            Profile
          </span>
        </Link>
      </div>
    </footer>
  );
}

export default Lower;
