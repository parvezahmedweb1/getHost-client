import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import hero from "../../assets/hosting-image.jpg";
import "./Hero.css";
const Hero = () => {
  return (
    <section id="hero" className="h-[90vh]">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="text-black text-center lg:text-left h-full flex  justify-center md:justify-center lg:justify-start py-6 md:py-6 lg:py-0 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                <span className="text-link">Powerful</span> Hosting,
                <br />
                <span style={{ color: "#66CCCC", fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "Shared Hosting",
                      "Cloud Reseller",
                      "Dedicated Servers",
                      "Cloud VPS",
                      "Developer Hosting",
                      "WordPress Hosting",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    cursorColor="#6633FF"
                  />
                </span>
                <br />
                Exceptional Service.
              </h1>
              <p className="my-4 text-slate-700">
                Web Hosting made EASY and AFFORDABLE.
              </p>
              <Link to="/services">
                <button className="btn-bg flex items-center text-white px-10 py-3 rounded-full font-bold hover:text-hLink transition-all delay-75">
                  View Services{" "}
                  <span>
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-1" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="md:h-[50vh] lg:h-[90vh] w-full md:mt-3 lg:mt-0 p-1">
            <img className="h-full w-full hero-img" src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
