import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/clients', label: 'Our Clients' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) => 'navbar__link' + (isActive ? ' active' : '')

  return (
    <motion.header 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Knotent Logo" className="navbar__logo-img" style={{ height: '40px', objectFit: 'contain' }} />
          <span className="navbar__tagline">Tying brands to the spotlights</span>
        </NavLink>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn--primary navbar__cta">
            Let's Talk
          </NavLink>
        </nav>

        <button
          className={'navbar__toggle' + (open ? ' open' : '')}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={'navbar__mobile' + (open ? ' open' : '')}>
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={linkClass}
            end={link.to === '/'}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </motion.header>
  )
}

export default Navbar
