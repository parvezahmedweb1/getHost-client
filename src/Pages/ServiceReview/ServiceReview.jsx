import { StarIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const ServiceReview = ({ userReview }) => {
  const { name, useEmail, serviceName, photoURl, rating, review } = userReview;
  const { user } = useContext(AuthContext);

  return (
    <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img
            src={user?.photoURL}
            alt=""
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leading-none">{name}</h2>
            <span className="inline-block text-xs leading-none dark:text-gray-400">
              {useEmail}
            </span>
          </div>
        </div>
        <div className="flex">
          <StarIcon className="h-6 w-6 text-yellow-300 mr-2" />
          <h4 className="text-md font-bold">{rating}</h4>
        </div>
      </div>
      <img
        src={photoURl}
        alt=""
        className="object-cover object-center w-full h-72 dark:bg-gray-500"
      />
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold">{serviceName}</h3>
        <p className="my-3 text-slate-400 ">
          <span className="text-link">"</span>
          {review}
          <span className="text-link">"</span>
        </p>
      </div>
    </div>
  );
};

export default ServiceReview;
