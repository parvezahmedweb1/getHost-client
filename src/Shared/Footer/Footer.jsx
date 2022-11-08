import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/Hosting-logo-light.png";
const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-link text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32 pt-5">
          <div className="mx-auto lg:mx-0">
            <img src={logo} alt="" width="140" />

            <div className="flex my-10 space-x-4">
              <FaFacebook className="text-white " size={25} />
              <FaInstagram className="text-white " size={25} />
              <FaGithub className="text-white" size={25} />
              <FaLinkedinIn className="text-white " size={25} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className=" text-hLink font-semibold"> Services </strong>

              <nav
                aria-label="Footer Services Nav"
                className="mt-6 flex flex-col space-y-1"
              >
                <a className="text-white" href="!#">
                  Shared Hosting
                </a>
                <a className="text-white" href="/">
                  Cloud Reseller
                </a>
                <a className="text-white" href="/">
                  Dedicated Servers
                </a>
                <a className="text-white" href="/">
                  Cloud VPS
                </a>
                <a className="text-white" href="/">
                  Developer Hosting
                </a>
                <a className="text-white" href="/">
                  WordPress Hosting
                </a>
              </nav>
            </div>

            <div>
              <strong className="text-hLink font-semibold"> About </strong>

              <nav
                aria-label="Footer About Nav"
                className="mt-6 flex flex-col space-y-1"
              >
                <a className="text-white" href="/">
                  About
                </a>
                <a className="text-white" href="/">
                  Careers
                </a>
                <a className="text-white" href="/">
                  History
                </a>
              </nav>
            </div>

            <div>
              <strong className="text-hLink font-semibold"> Support </strong>

              <nav
                aria-label="Footer Support Nav"
                className="mt-6 flex flex-col space-y-1"
              >
                <a className="text-white" href="/">
                  FAQs
                </a>

                <a className="text-white" href="/">
                  Contact
                </a>

                <a className="text-white" href="/">
                  Live Chat
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs leading-relaxed text-white">
            © GETHOST 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
