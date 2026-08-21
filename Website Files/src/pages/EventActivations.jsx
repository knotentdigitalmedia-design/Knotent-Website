import { Link } from 'react-router-dom'
import Banner from '../components/Banner.jsx'
import FadeIn from '../components/FadeIn.jsx'
import AnimatedText from '../components/AnimatedText.jsx'

const OFFERINGS = [
  { title: 'Launch Events', desc: 'Product and brand launches designed to give press, guests and social feeds something worth covering.' },
  { title: 'Red Carpet Strategy', desc: 'Talent walks, media wall placement and photo-moment planning that turn attendance into coverage.' },
  { title: 'Pop-Ups & Experiences', desc: 'Short-run, high-impact spaces built for footfall, dwell time and shareability.' },
  { title: 'On-Ground Production', desc: 'Vendors, logistics and run-of-show managed end to end, so the day runs itself.' },
]

const PROCESS = [
  { step: '01', title: 'Concept', desc: 'We build the idea around the moment worth creating, not just the venue.' },
  { step: '02', title: 'Design', desc: 'We plan the guest list, talent, media and experience design together.' },
  { step: '03', title: 'Produce', desc: 'We run vendors, logistics and on-ground execution from load-in to load-out.' },
  { step: '04', title: 'Capture', desc: 'We document and push the moment out across press and social in real time.' },
]

const RELATED = [
  { to: '/services/pr-media', label: 'PR & Media' },
  { to: '/services/social-influencer', label: 'Social & Influencer' },
  { to: '/services/talent-management', label: 'Talent Management' },
]

function EventActivations() {
  return (
    <>
      <Banner
        kicker="Event Activations"
        title={'Moments engineered for the\n**spotlight**'}
        subtitle="Launches, red-carpet strategy and pop-up experiences designed to get people talking — and posting — in real time."
        crumb="Services / Event Activations"
        align="left"
      />

      <FadeIn>
        <section className="section" style={{ paddingTop: 70 }}>
          <div className="container">
            <div className="grid-2">
              <div>
                <span className="eyebrow">What We Do</span>
                <AnimatedText
                  text="Experiences built to be seen twice"
                  className="h2-style"
                  elementType="h2"
                  style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
                />
                <p>
                  A good event happens once in a room. A great one happens again on every guest's
                  feed. We plan activations with both audiences in mind from the first concept
                  meeting — the people in the room, and the people watching from outside it.
                </p>
                <p>
                  From launch parties to pop-up experiences, we own production end to end so the
                  brand's team can host, not troubleshoot.
                </p>
                <Link to="/contact" className="btn btn--ghost">Plan Your Activation</Link>
              </div>
              <div>
                <div className="testimonial-card">
                  <div className="testimonial-card__mark">"</div>
                  <p className="testimonial-card__quote">
                    From concept to press day, the team owned every detail. Our launch felt
                    effortless from where we were standing.
                  </p>
                  <div className="testimonial-card__name">Founder</div>
                  <div className="testimonial-card__role">Consumer Tech Startup</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="stat-row">
          <div className="stat">
            <div className="stat__num">70+</div>
            <div className="stat__label">Activations Produced</div>
          </div>
          <div className="stat">
            <div className="stat__num">15</div>
            <div className="stat__label">Cities Covered</div>
          </div>
          <div className="stat">
            <div className="stat__num">3.4x</div>
            <div className="stat__label">Avg. Earned Media Lift</div>
          </div>
          <div className="stat">
            <div className="stat__num">100%</div>
            <div className="stat__label">On-Time Delivery</div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What's Included</span>
                <AnimatedText text="Full-scale event production" />
              </div>
              <p>From concept to load-out, everything an activation needs to land.</p>
            </div>
            <div className="value-list">
              {OFFERINGS.map((o) => (
                <div className="value-item" key={o.title}>
                  <h4>{o.title}</h4>
                  <p>{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">How We Work</span>
                <AnimatedText text="Our process" />
              </div>
            </div>
            <div className="value-list value-list--four">
              {PROCESS.map((p) => (
                <div className="value-item" key={p.step}>
                  <span className="service-card__index" style={{ marginBottom: 10 }}>{p.step}</span>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Pairs Well With</span>
                <h2>Related services</h2>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {RELATED.map((r) => (
                <Link key={r.to} to={r.to} className="btn btn--ghost">{r.label}</Link>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="cta-band">
          <div className="spotlight-field">
            <div className="spotlight-beam b1" />
            <div className="spotlight-beam b2" />
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <AnimatedText text="Planning a moment worth showing up for?" />
            <p>Let's build the activation that gets talked about after the lights come down.</p>
            <div className="cta-band__actions">
              <Link to="/contact" className="btn btn--primary">Start a Conversation</Link>
              <Link to="/services" className="btn btn--ghost">View All Services</Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  )
}

export default EventActivations
