import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const products = useLoaderData();
  console.log(products);
  /* const handleUpdate = (e) => {
    e.preventDefault();
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      price: parseInt(e.target.price.value),
      image: e.target.image.value,
    };
    fetch(`http://localhost:5000/update/${router.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        Navigate("/reviews");
      });
  }; */
  return (
    <div className="container mx-auto my-10">
      <article className="rounded-xl mb-10 bg-gradient-to-r btn-bg p-0.5 text-center shadow-sm transition hover:shadow-xl md:w-10/12 lg:w-1/2 mx-auto">
        <h3 className="text-xl md:text-3xl font-semibold py-2 text-white">
          Update Review
        </h3>
        <div className="rounded-[10px] bg-white p-4">
          <div className="flex flex-col">
            <div className="flex flex-col items-center w-full">
              <form className="w-full">
                <div className="mb-4">
                  <input
                    className="p-4 rounded-md border w-full"
                    placeholder="Name"
                    type="text"
                    name="serviceName"
                    id="name"
                    readOnly
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="p-4 rounded-md border w-full"
                    placeholder="Photo URL"
                    type="text"
                    name="photoURL"
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
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default UpdateReview;
