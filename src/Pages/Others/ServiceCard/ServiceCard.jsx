import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, loading }) => {
  const { serviceName, img, price, _id } = service;
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div className="flex flex-col justify-between p-4 transition-shadow duration-300 bg-white border rounded-lg shadow-sm sm:items-center hover:shadow-2xl">
          <img src={img} alt="" />
          <div className="text-center">
            <div className="text-lg font-semibold">{serviceName}</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">
                $ <span className="text-link">{price}</span>{" "}
              </div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">10 deploys per day</div>
              <div className="text-gray-700">10 GB of storage</div>
              <div className="text-gray-700">20 domains</div>
            </div>
          </div>
          <Link to={`/services/${_id}`} className="scroll-auto">
            <button className="inline-flex items-center justify-center w-full px-20 h-12 mt-6 font-bold tracking-wide text-white btn-bg rounded-lg hover:text-hLink">
              View Details{" "}
              <span>
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </span>
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
