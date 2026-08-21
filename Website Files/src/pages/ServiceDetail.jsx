import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-red-500 underline">Back to all services</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-8 py-24 max-w-5xl mx-auto">
      <span className="text-red-600 font-mono text-lg">{service.id}</span>
      <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">{service.title}</h1>
      <p className="text-zinc-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
        {service.desc}
      </p>
      
      <Link 
        to="/contact" 
        className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded transition"
      >
        Talk to Us
      </Link>
    </div>
  );
};

export default ServiceDetail;
