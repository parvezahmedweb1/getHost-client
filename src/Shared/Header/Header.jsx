import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Hosting-logo.png";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../contexts/UserContext";
import NavMobile from "../../Pages/Others/NavMobile/NavMobile";
import "./Header.css";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
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
              {user?.uid && (
                <li className="font-semibold text-link hover:text-hLink delay-100">
                  <Link to="/review">My Review</Link>
                </li>
              )}
              {user?.uid && (
                <li className="font-semibold text-link hover:text-hLink delay-100">
                  <Link to="/addServices">Add Services</Link>
                </li>
              )}
              <li className="font-semibold text-link hover:text-hLink delay-100">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="font-semibold text-link hover:text-hLink delay-100">
                <Link to="/contact">Contact</Link>
              </li>
              <span className="text-link">|</span>
              {user?.uid && (
                <>
                  <img
                    title={user.displayName}
                    className="mr-5 rounded-full cursor-pointer"
                    src={user?.photoURL ? user.photoURL : userImg}
                    width="40"
                    alt=""
                  />
                  <span className="text-link">|</span>
                </>
              )}
              {user?.uid ? (
                <button
                  onClick={logout}
                  className="bg-hLink flex items-center font-semibold px-10 rounded-full py-2 text-white hover:bg-link delay-100"
                >
                  Logout{" "}
                  <span>
                    <ArrowLeftOnRectangleIcon className="w-5 h-5 ml-1" />
                  </span>
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn-bg flex items-center font-semibold px-10 rounded-full py-2 text-white hover:text-hLink delay-100">
                    Sign In{" "}
                    <span>
                      <ArrowRightOnRectangleIcon className="w-5 h-5 ml-1" />
                    </span>
                  </button>
                </Link>
              )}
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
