import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";
import useTitle from "../../Hooks/useTitle";
import ServiceReview from "../ServiceReview/ServiceReview";

const ServiceDetails = () => {
  useTitle("Service Details");
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [reviews, setReviews] = useState([]);

  const { serviceName, details, img, _id } = data.service;
  useEffect(() => {
    fetch(`https://gethost-server.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, reviews]);
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.serviceName.value;
    const photoURl = e.target.photoURL.value;
    const rating = e.target.rating.value;
    const review = e.target.review.value;
    const userReview = {
      name: user?.displayName,
      useEmail: user?.email,
      serviceId: _id,
      serviceName: name,
      photoURl,
      rating,
      review,
    };
    fetch("https://gethost-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review Added successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <section className=" container mx-auto w-full ">
      <div className="services-header rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center py-2">
          <div className="md:pl-10 pl-0 text-center md:text-left">
            <h2 className=" text-2xl  md:text-4xl text-white font-bold">
              {serviceName}
            </h2>
          </div>
          <div className="mx-auto">
            <img className="h-60 md:block" src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="my-10 bg-slate-50 p-10">
        <h3 className="text-xl md:text-3xl font-semibold">Details</h3>
        <p className="mt-4 text-slate-700">{details}</p>
      </div>

      {reviews.length > 0 && (
        <div className="my-10 bg-slate-50">
          <div className="container mx-auto my-10 py-10">
            <h3 className="text-xl md:text-3xl font-semibold mb-6">
              My Review
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ServiceReview key={review._id} userReview={review} />
              ))}
            </div>
          </div>
        </div>
      )}
      <article className="rounded-xl mb-10 bg-gradient-to-r btn-bg p-0.5 text-center shadow-sm transition hover:shadow-xl md:w-10/12 lg:w-1/2 mx-auto">
        <h3 className="text-xl md:text-3xl font-semibold">Add Review</h3>
        <div className="rounded-[10px] bg-white p-4">
          <div className="flex flex-col">
            <div className="flex flex-col items-center w-full">
              {user ? (
                <form onSubmit={handleReview} className="w-full">
                  <div className="mb-4">
                    <input
                      className="p-4 rounded-md border w-full"
                      placeholder="Name"
                      type="text"
                      name="serviceName"
                      id="name"
                      value={serviceName}
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="p-4 rounded-md border w-full"
                      placeholder="Photo URL"
                      type="text"
                      name="photoURL"
                      value={img}
                      id="photo"
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="p-4 rounded-md border w-full"
                      placeholder="Rating Point"
                      type="number"
                      name="rating"
                      id="rating"
                    />
                  </div>
                  <textarea
                    rows="3"
                    placeholder="Message..."
                    name="review"
                    className="p-4 rounded-md border w-full"
                  ></textarea>
                  <button
                    type="submit"
                    className="block w-full rounded-lg bg-link px-5 py-3 text-md font-semibold  text-white hover:text-hLink"
                  >
                    Add Review
                  </button>
                </form>
              ) : (
                <>
                  <h3 className="text-xl md:text-3xl font-semibold text-red-700 my-4">
                    Please Login To Add a Review !!!
                  </h3>
                  <Link
                    to="/login"
                    className="block w-full rounded-lg bg-link px-5 py-3 text-md font-semibold  text-white hover:text-hLink"
                  >
                    <button type="submit">Sign in</button>
                  </Link>
                </>
              )}
              {/* <div className="flex flex-col items-center space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 2 stars"
                    aria-label="Rate 2 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 3 stars"
                    aria-label="Rate 3 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 4 stars"
                    aria-label="Rate 4 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 5 stars"
                    aria-label="Rate 5 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 dark:text-gray-600"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                </div>
                <button className="btn-bg block w-full py-4 rounded-full font-bold text-white text-md hover:text-hLink">
                  Send
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ServiceDetails;
