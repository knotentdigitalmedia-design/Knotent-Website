import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ id, title, desc, slug }) => {
  return (
    <Link 
      to={`/services/${slug}`} 
      className="service-card block p-6 border border-zinc-800 hover:border-red-600 transition duration-300 rounded-lg group cursor-pointer text-left"
    >
      <span className="text-red-600 font-mono text-sm">{id}</span>
      <h3 className="text-white text-xl font-bold mt-4 mb-2 group-hover:text-red-500 transition">
        {title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
    </Link>
  );
};

export default ServiceCard;
