import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import Spanner from "../Spanner/Spanner";

const ServicesContainer = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://gethost-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.services);
          setLoading(false);
        }
      });
  }, []);
  return (
    <>
      {loading && <Spanner />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} loading={loading} />
        ))}
      </div>
    </>
  );
};

export default ServicesContainer;
