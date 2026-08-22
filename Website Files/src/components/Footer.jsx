import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";

const Footer = () => {
  return (
    <footer className="footer bg-black text-zinc-400 py-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div>
          <h2 className="text-white text-2xl font-bold tracking-wider mb-2">KNOTENT</h2>
          <p className="text-sm">Tying brands to the spotlight.</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">NAVIGATE</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">SERVICES</h4>
          <ul className="space-y-2 text-sm">
            {services.map((item) => (
              <li key={item.slug}>
                <Link 
                  to={`/services/${item.slug}`} 
                  className="hover:text-white transition duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
