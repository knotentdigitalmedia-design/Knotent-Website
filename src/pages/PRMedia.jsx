import { Link } from 'react-router-dom'
import Banner from '../components/Banner.jsx'
import FadeIn from '../components/FadeIn.jsx'
import AnimatedText from '../components/AnimatedText.jsx'

const OFFERINGS = [
  { title: 'Press Outreach', desc: 'Targeted pitching to the journalists and publications that actually reach your audience.' },
  { title: 'Media Relations', desc: 'Ongoing relationships with editors and reporters, so a brand is a source, not a stranger.' },
  { title: 'Reputation Management', desc: 'Proactive narrative-building that keeps a brand\u2019s public story in its own hands.' },
  { title: 'Crisis Communication', desc: 'A response plan and a steady hand for the moments that need one.' },
]

const PROCESS = [
  { step: '01', title: 'Audit', desc: 'We map current sentiment, coverage and the gaps worth closing.' },
  { step: '02', title: 'Angle', desc: 'We build the story angles that are genuinely newsworthy, not just on-brand.' },
  { step: '03', title: 'Pitch', desc: 'We take the story to the right press, on the right timeline.' },
  { step: '04', title: 'Protect', desc: 'We monitor coverage and stay ready for whatever comes next.' },
]

const RELATED = [
  { to: '/services/event-activations', label: 'Event Activations' },
  { to: '/services/brand-strategy', label: 'Brand Strategy' },
  { to: '/services/brand-partnerships', label: 'Brand Partnerships' },
]

function PRMedia() {
  return (
    <>
      <Banner
        kicker="PR & Media"
        title={'Earn the\n**headlines** that matter'}
        subtitle="Press outreach, media relations and reputation strategy that keeps a brand in the right conversations \u2014 not just the loudest ones."
        crumb="Services / PR & Media"
        align="left"
      />

      <FadeIn>
        <section className="section" style={{ paddingTop: 70 }}>
          <div className="container">
            <div className="grid-2">
              <div>
                <span className="eyebrow">What We Do</span>
                <AnimatedText
                  text="Coverage that builds credibility, not just noise"
                  className="h2-style"
                  elementType="h2"
                  style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
                />
                <p>
                  Earned media still carries a trust that paid placements can't buy. We build the
                  story angles, relationships and timing that get a brand covered on merit \u2014
                  and keep it in good standing when the coverage isn't asked for.
                </p>
                <p>
                  From a single launch pitch to an always-on reputation strategy, we handle press
                  the way a brand's most senior spokesperson would.
                </p>
                <Link to="/contact" className="btn btn--ghost">Talk To Our PR Team</Link>
              </div>
              <div>
                <div className="testimonial-card">
                  <div className="testimonial-card__mark">"</div>
                  <p className="testimonial-card__quote">
                    Our launch event got more earned coverage than we'd planned for the entire
                    quarter. The team owned every detail, start to finish.
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
            <div className="stat__num">500+</div>
            <div className="stat__label">Press Placements</div>
          </div>
          <div className="stat">
            <div className="stat__num">80+</div>
            <div className="stat__label">Media Relationships</div>
          </div>
          <div className="stat">
            <div className="stat__num">40pt</div>
            <div className="stat__label">Sentiment Lift, Best Case</div>
          </div>
          <div className="stat">
            <div className="stat__num">24hr</div>
            <div className="stat__label">Crisis Response Time</div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What's Included</span>
                <AnimatedText text="Full-spectrum PR support" />
              </div>
              <p>From a single press push to always-on reputation management.</p>
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
            <AnimatedText text="Need the right story told?" />
            <p>Let's build the press strategy that gets you covered for the right reasons.</p>
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

export default PRMedia
