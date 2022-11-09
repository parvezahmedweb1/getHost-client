import React from "react";
import useTitle from "../../Hooks/useTitle";
import ServicesContainer from "../Others/ServicesContainer/ServicesContainer";
import ServicesHeader from "../ServicesHeader/ServicesHeader";

const Services = () => {
  useTitle("Services");
  return (
    <section>
      <div className="container mx-auto">
        <ServicesHeader />
        <div className="my-4">
          <ServicesContainer />
        </div>
      </div>
    </section>
  );
};

export default Services;
