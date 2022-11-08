import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Hosting-logo.png";
import NavMobile from "../../Pages/Others/NavMobile/NavMobile";
import "./Header.css";
const Header = () => {
  return (
    <header className="h-16 flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between items-center z-20">
          <Link to="/">
            <img src={logo} alt="" width="140" />
          </Link>
          {/* nav start */}
          <nav>
            <ul className="hidden md:flex items-center space-x-7">
              <li className="font-semibold text-link hover:text-hLink delay-100">
                <Link to="/home">Home</Link>
              </li>
              <li className="font-semibold text-link hover:text-hLink delay-100">
                <Link to="/services">Services</Link>
              </li>
              <li className="font-semibold text-link hover:text-hLink delay-100">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="font-semibold text-link hover:text-hLink delay-100">
                <Link to="/contact">Contact</Link>
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
