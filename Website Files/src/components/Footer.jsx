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

        {/* Map Column */}
        <div>
          <h4 className="text-white font-semibold mb-4">FIND US</h4>
          <div style={{ width: '100%', height: '180px', borderRadius: '6px', overflow: 'hidden', border: '1px solid #27272a' }}>
            <iframe 
              title="Knotent Location"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              src="https://maps.google.com/maps?q=Mumbai&t=&z=11&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0, filter: 'grayscale(1) invert(90%)' }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
