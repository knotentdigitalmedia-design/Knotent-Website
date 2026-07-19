import { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              <span style={{ color: '#F50615' }}>KNOT</span><span style={{ color: '#FFFFFF' }}>ENT</span>
            </div>
            <p className="footer__tagline">Tying brands to the spotlights — talent, PR and brand experiences built for attention.</p>
            <div className="footer__social">
              <a href="https://www.facebook.com/profile.php?id=61590924571837" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/weareknotent/" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
            </div>
          </div>

          <div>
            <div className="footer__heading">Navigate</div>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/clients">Our Clients</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer__heading">Services</div>
            <ul className="footer__links">
              <li><Link to="/services">Talent Management</Link></li>
              <li><Link to="/services">Brand Partnerships</Link></li>
              <li><Link to="/services">PR &amp; Media</Link></li>
              <li><Link to="/services">Event Activations</Link></li>
              <li><Link to="/services">Social &amp; Influencer</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer__heading">Stay In The Loop</div>
            <p style={{ fontSize: '13.5px', marginBottom: '14px' }}>
              Get spotlight-worthy campaign stories in your inbox.
            </p>
            {subscribed ? (
              <p style={{ color: '#F50615', fontSize: '13px' }}>You're on the list. Thank you!</p>
            ) : (
              <form className="footer__newsletter" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Join</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} KNOTENT. All rights reserved.</span>
          <div className="footer__bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
