import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServicesContainer = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.services);
          setLoading(false);
        }
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service} loading={loading} />
      ))}
    </div>
  );
};

export default ServicesContainer;
