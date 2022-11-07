import React from "react";
import logo from "../../assets/Hosting-logo.png";
import NavMobile from "../../Pages/Others/NavMobile/NavMobile";
import "./Header.css";
const Header = () => {
  return (
    <header className="h-16 flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between items-center z-20">
          <img src={logo} alt="" width="140" />
          {/* nav start */}
          <nav>
            <ul className="hidden md:flex items-center space-x-7">
              <li className="font-semibold text-link hover:text-hLink delay-100">
                <a href="/home">Home</a>
              </li>
              <li className="font-semibold text-link hover:text-hLink delay-100">
                <a href="/services">Services</a>
              </li>
              <li className="font-semibold text-link hover:text-hLink delay-100">
                <a href="/blogs">Blogs</a>
              </li>
              <li className="font-semibold text-link hover:text-hLink delay-100">
                <a href="/contact">Contact</a>
              </li>
              <span className="text-link">|</span>
              <button className="btn-bg  font-semibold px-10 rounded-full py-2 text-white hover:text-hLink delay-100">
                Sign In
              </button>
            </ul>
          </nav>
          {/* nav end */}
          {/* nav mobile */}
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
