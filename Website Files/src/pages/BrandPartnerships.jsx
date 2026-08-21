import { Link } from 'react-router-dom'
import Banner from '../components/Banner.jsx'
import FadeIn from '../components/FadeIn.jsx'
import AnimatedText from '../components/AnimatedText.jsx'

const OFFERINGS = [
  { title: 'Talent Matchmaking', desc: 'We shortlist talent whose audience, values and moment genuinely fit the brief — not just the follower count.' },
  { title: 'Campaign Concepting', desc: 'A creative idea worth the partnership, built around what the talent and audience actually respond to.' },
  { title: 'Deal Structuring', desc: 'Clear scopes, deliverables and usage rights so both sides know exactly what success looks like.' },
  { title: 'Performance Tracking', desc: 'Reporting against the objective the deal was built on, not vanity metrics.' },
]

const PROCESS = [
  { step: '01', title: 'Brief', desc: 'We define the brand objective the partnership needs to serve.' },
  { step: '02', title: 'Match', desc: 'We shortlist talent against fit, not just reach.' },
  { step: '03', title: 'Structure', desc: 'We negotiate scope, deliverables and terms that protect both sides.' },
  { step: '04', title: 'Measure', desc: 'We report against the original objective and refine for the next one.' },
]

const RELATED = [
  { to: '/services/talent-management', label: 'Talent Management' },
  { to: '/services/social-influencer', label: 'Social & Influencer' },
  { to: '/services/brand-strategy', label: 'Brand Strategy' },
]

function BrandPartnerships() {
  return (
    <>
      <Banner
        kicker="Brand Partnerships"
        title={'Matches that feel\n**inevitable**'}
        subtitle="We pair brands with talent whose audience, values and moment actually align — then structure the deal to prove it worked."
        crumb="Services / Brand Partnerships"
        align="left"
      />

      <FadeIn>
        <section className="section" style={{ paddingTop: 70 }}>
          <div className="container">
            <div className="grid-2">
              <div>
                <span className="eyebrow">What We Do</span>
                <AnimatedText
                  text="Partnerships that don't feel paid for"
                  className="h2-style"
                  elementType="h2"
                  style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
                />
                <p>
                  A brand deal only works when the audience believes it. We start every
                  partnership with the objective, not the talent list — then find the person
                  whose story genuinely overlaps with the brand's.
                </p>
                <p>
                  From first shortlist to final report, we manage the relationship end to end so
                  nothing gets lost between the pitch and the payoff.
                </p>
                <Link to="/contact" className="btn btn--ghost">Brief Us On Your Brand</Link>
              </div>
              <div>
                <div className="testimonial-card">
                  <div className="testimonial-card__mark">"</div>
                  <p className="testimonial-card__quote">
                    The talent match they found felt organic, and the results showed it —
                    engagement we hadn't seen from any prior campaign.
                  </p>
                  <div className="testimonial-card__name">Marketing Lead</div>
                  <div className="testimonial-card__role">D2C Fashion Brand</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="stat-row">
          <div className="stat">
            <div className="stat__num">60+</div>
            <div className="stat__label">Brands Matched</div>
          </div>
          <div className="stat">
            <div className="stat__num">200+</div>
            <div className="stat__label">Partnerships Delivered</div>
          </div>
          <div className="stat">
            <div className="stat__num">98%</div>
            <div className="stat__label">Client Retention</div>
          </div>
          <div className="stat">
            <div className="stat__num">2.1x</div>
            <div className="stat__label">Avg. Engagement Lift</div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What's Included</span>
                <AnimatedText text="End-to-end partnership management" />
              </div>
              <p>Everything between a shortlist and a signed, reported partnership.</p>
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
            <AnimatedText text="Have a brand ready for its match?" />
            <p>Tell us the objective — we'll find the partnership that actually serves it.</p>
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

export default BrandPartnerships
