import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../../assets/Hosting-logo-light.png";
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* hamburger menu start */}
      <div onClick={() => setIsOpen(!isOpen)} className="block md:hidden z-10">
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-link hover:text-hLink delay-100 cursor-pointer  " />
        ) : (
          <Bars3Icon className="h-6 w-6 text-link hover:text-hLink delay-100 cursor-pointer  " />
        )}
      </div>
      {/* hamburger menu end */}
      {/* nav start */}
      <nav
        onClick={() => setIsOpen(!isOpen)}
        className={
          isOpen
            ? "absolute left-[0] top-0 w-full h-screen text-block container bg-nav py-4 bg-hLink"
            : "absolute left-[-100%]"
        }
      >
        <img src={logo} alt="" width="140" />
        <ul className="block text-center space-y-4 mt-10">
          <li className="font-semibold text-white delay-100">
            <a href="/home">Home</a>
          </li>
          <li className="font-semibold text-white delay-100">
            <a href="/services">Services</a>
          </li>
          <li className="font-semibold text-white delay-100">
            <a href="/blogs">Blogs</a>
          </li>
          <li className="font-semibold text-white delay-100">
            <a href="/contact">Contact</a>
          </li>
          <button className="btn-bg  font-semibold px-10 rounded-full py-2 text-white hover:text-hLink delay-100">
            Sign In
          </button>
        </ul>
        {/* social media */}
        <div className="flex my-10 justify-around">
          <FaFacebook className="text-link " size={25} />
          <FaInstagram className="text-link " size={25} />
          <FaGithub className="text-link " size={25} />
          <FaLinkedinIn className="text-link " size={25} />
        </div>
      </nav>
      {/* nav end */}
    </>
  );
};

export default NavMobile;
