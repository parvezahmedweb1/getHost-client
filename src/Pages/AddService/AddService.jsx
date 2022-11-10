import React from "react";
import { toast } from "react-toastify";
import bannerS from "../../assets/services/customer.webp";
import useTitle from "../../Hooks/useTitle";
const AddService = () => {
  useTitle("Add Service");
  // ? handleSubmit
  const handleSubmit = (e) => {
    const form = e.target;
    e.preventDefault();

    const serviceName = form.name.value;
    const price = form.price.value;
    const img = form.photo.value;
    const details = form.details.value;
    const service = {
      serviceName,
      img,
      details,
      price,
    };
    // ? db post request
    fetch("https://gethost-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully Service Added");
        }
      });
    form.reset();
  };
  return (
    <section className="container mx-auto">
      <div className="services-header w-full rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center py-2">
          <div className="md:pl-10 pl-0 text-center md:text-left">
            <h2 className=" text-2xl  md:text-4xl text-white font-bold">
              Add New Services
            </h2>
          </div>
          <div className="mx-auto">
            <img className="h-60 hidden md:block" src={bannerS} alt="" />
          </div>
        </div>
      </div>
      <article className="rounded-xl bg-gradient-to-r btn-bg p-0.5 text-center shadow-sm transition hover:shadow-xl md:w-10/12 mx-auto my-10">
        <div className="rounded-[10px] bg-white p-4">
          <div className="flex flex-col">
            <div className="flex flex-col items-center w-full">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                  <input
                    className="p-4 rounded-md border w-full"
                    placeholder="Service Name"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="p-4 rounded-md border w-full"
                    placeholder="Price"
                    type="number"
                    name="price"
                    id="price"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="p-4 rounded-md border w-full"
                    placeholder="Photo URL"
                    type="text"
                    name="photo"
                    id="photo"
                  />
                </div>
                <textarea
                  rows="5"
                  placeholder="Details..."
                  name="details"
                  className="p-4 mb-1 rounded-md border w-full"
                ></textarea>
                <button
                  type="submit"
                  className="bg-link block border w-full p-4 rounded-full text-lg text-white font-bold hover:text-hLink"
                >
                  Add Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AddService;
