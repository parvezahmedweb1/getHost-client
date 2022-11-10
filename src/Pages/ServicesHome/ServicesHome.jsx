import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Others/ServiceCard/ServiceCard";
import Spanner from "../Others/Spanner/Spanner";

const ServicesHome = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://gethost-server.vercel.app/limit")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.services);
          setLoading(false);
        }
      });
  }, []);
  return (
    <div className="container mx-auto my-12">
      {loading && <Spanner />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <Link to="/services" className="scroll-auto">
        <button className="mt-10 bg-hLink py-4 px-20 rounded-lg text-white font-bold hover:text-link delay-100 block mx-auto">
          View All Services
        </button>
      </Link>
    </div>
  );
};

export default ServicesHome;
