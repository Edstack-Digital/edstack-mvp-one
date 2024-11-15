import { SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Lower() {
  return (
    <footer className="flex items-center justify-between bg-[#1D1E2F] px-10 py-8 font-[Satoshi] text-white">
      <div className="flex items-center">
        <img src="/ed.png" alt="edstack logo" className="h-10 sm:h-10" />
        <div className="flex-col">
          <div>EdStack Digital Ltd.</div>
          <div>Empowering students</div>
        </div>
      </div>

      <div className="flex-col">
        <div className="flex justify-center space-x-4">
          <SlSocialYoutube />
          <FaLinkedinIn />
          <SlSocialInstagram />
          <SiTiktok />
          <RiTwitterXFill />
        </div>

        
        <div className="text-center">Data, Privacy & Protection Terms</div>
      </div>


      <div className="flex-col text-right">
      <Link to="/">
        <div className=" ">Join Our Community!</div>
        </Link>

        <Link to='/'>
        
        <div className=" ">Subscribe to our Newsletter</div>
        </Link>
      </div>
    </footer>
  );
}

export default Lower;
