import React from "react";
import bannerS from "../../assets/services/all-in-one-website.webp";
import "./ServicesHeader.css";
const ServicesHeader = () => {
  return (
    <div className="services-header w-full rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center py-2">
        <div className="md:pl-10 pl-0 text-center md:text-left">
          <h2 className=" text-2xl  md:text-4xl text-white font-bold">
            All-In-One Website <br /> Hosting Services
          </h2>
        </div>
        <div className="mx-auto">
          <img className="h-60 hidden md:block" src={bannerS} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
