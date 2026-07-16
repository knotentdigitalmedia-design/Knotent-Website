import { useState } from 'react'
import Banner from '../components/Banner.jsx'

const OFFICES = [
  { city: 'Udaipur (HQ)', address: 'J-12 Udaipark Hiran Magri Sector 5 Udaipur', phone: '+91-78500-21954' },
]

const initialForm = { name: '', email: '', phone: '', company: '', purpose: 'Brand Partnership', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <Banner
        kicker="Get In Touch"
        title="Let's step into the **spotlight**"
        subtitle="Tell us about your brand, your talent, or your next big moment — we'll get back within one business day."
        crumb="Contact"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">Reach Us</span>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)' }}>Our offices</h2>

              <div className="contact-info-item">
                <div className="contact-info-item__icon">@</div>
                <div>
                  <h4>Email</h4>
                  <p>knotentdigitalmedia@gmail.com</p>
                </div>
              </div>

              {OFFICES.map((o) => (
                <div className="contact-info-item" key={o.city}>
                  <div className="contact-info-item__icon">◈</div>
                  <div>
                    <h4>{o.city}</h4>
                    <p>{o.address}</p>
                    <p style={{ marginTop: 4 }}>{o.phone}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <span className="eyebrow">Send A Message</span>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)', marginBottom: 26 }}>Start the conversation</h2>

              <form className="form" onSubmit={handleSubmit}>
                {submitted && (
                  <div className="form__success">
                    Thanks — your message has been sent. Our team will be in touch shortly.
                  </div>
                )}

                <div className="field">
                  <label htmlFor="name">Full Name*</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
                </div>

                <div className="field">
                  <label htmlFor="email">Email Address*</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
                </div>

                <div className="field">
                  <label htmlFor="phone">Contact Number*</label>
                  <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} />
                </div>

                <div className="field">
                  <label htmlFor="company">Company / Brand*</label>
                  <input id="company" name="company" type="text" required value={form.company} onChange={handleChange} />
                </div>

                <div className="field form__full">
                  <label htmlFor="purpose">Purpose*</label>
                  <select id="purpose" name="purpose" value={form.purpose} onChange={handleChange}>
                    <option>Brand Partnership</option>
                    <option>Talent Management</option>
                    <option>PR & Media Enquiry</option>
                    <option>Event Activation</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="field form__full">
                  <label htmlFor="message">Message*</label>
                  <textarea id="message" name="message" required value={form.message} onChange={handleChange} />
                </div>

                <div className="form__full">
                  <button type="submit" className="btn btn--primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
