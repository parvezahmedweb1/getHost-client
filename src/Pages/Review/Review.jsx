import { StarIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Review = ({ userReview, handleDelete }) => {
  const { name, useEmail, serviceName, photoURl, rating, review, _id } =
    userReview;
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
        <span className="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm">
          <button
            className="inline-block p-3 px-10 text-gray-700 hover:bg-gray-50 focus:relative"
            title="Edit Product"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>

          <button
            onClick={() => handleDelete(_id)}
            className="inline-block p-3 px-10 text-gray-700 hover:bg-gray-50 focus:relative"
            title="Delete Product"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Review;
