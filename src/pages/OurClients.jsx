import Banner from '../components/Banner.jsx'
import { Link } from 'react-router-dom'

const CLIENTS = [
  'Arihant Construction', 'Arihant Caterers',
]

const CASE_STUDIES = [
  {
    tag: 'Talent Partnership',
    title: 'Turning a fashion label into a red-carpet regular',
    result: '3.4x rise in earned media mentions within two seasons.',
  },
  {
    tag: 'Influencer Campaign',
    title: 'Launching a D2C brand through creator-led storytelling',
    result: '210% growth in social-driven conversions.',
  },
  {
    tag: 'PR & Media',
    title: 'Rebuilding brand trust after a category-wide setback',
    result: 'Positive sentiment share up 40 points in one quarter.',
  },
]

function OurClients() {
  return (
    <>
      <Banner
        kicker="Who We Work With"
        title="Brands who trusted the **spotlight**"
        subtitle="From fast-growing D2C names to established market leaders, our client roster spans categories, but not our standard of work."
        crumb="Our Clients"
      />

      <section className="section" style={{ paddingTop: 70 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Client Roster</span>
              <h2>A few of the brands we've partnered with</h2>
            </div>
            <p>60+ brands across fashion, D2C, healthcare, fintech and consumer tech.</p>
          </div>
        </div>
        <div className="container" style={{ padding: 0 }}>
          <div className="clients-grid">
            {CLIENTS.map((c) => (
              <div className="client-tile" key={c}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Results In The Spotlight</span>
              <h2>Case studies</h2>
            </div>
          </div>
          <div className="value-list value-list--three">
            {CASE_STUDIES.map((cs) => (
              <div className="value-item" key={cs.title}>
                <span className="eyebrow" style={{ marginBottom: 12 }}>{cs.tag}</span>
                <h4>{cs.title}</h4>
                <p>{cs.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">In Their Words</span>
              <h2>What clients say</h2>
            </div>
          </div>
          <div className="grid-2">
            <div className="testimonial-card">
              <div className="testimonial-card__mark">"</div>
              <p className="testimonial-card__quote">
                KNOTENT has been a catalyst in our growth story. The team is deeply
                supportive and understands exactly where our brand needs to show up.
              </p>
              <div className="testimonial-card__name">Brand Director</div>
              <div className="testimonial-card__role">Lifestyle & Retail</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card__mark">"</div>
              <p className="testimonial-card__quote">
                A young team with senior-level instincts. We've seen a real, measurable
                shift in how our brand is perceived since we started working together.
              </p>
              <div className="testimonial-card__name">Head of Marketing</div>
              <div className="testimonial-card__role">Consumer Tech</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="spotlight-field">
          <div className="spotlight-beam b1" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2>Ready to join the roster?</h2>
          <p>Let's find out what your brand looks like under the lights.</p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--primary">Become A Client</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurClients
