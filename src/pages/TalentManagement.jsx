import { Link } from 'react-router-dom'
import Banner from '../components/Banner.jsx'
import FadeIn from '../components/FadeIn.jsx'
import AnimatedText from '../components/AnimatedText.jsx'

const OFFERINGS = [
  { title: 'Brand Deal Negotiation', desc: 'We negotiate terms that protect a client\u2019s rate, rights and long-term value \u2014 not just the next paycheck.' },
  { title: 'Career Positioning', desc: 'A clear point of view on who a talent is and where they belong, so every deal builds on the last one.' },
  { title: 'Portfolio Development', desc: 'Curating the right mix of categories and formats so a talent\u2019s work reads as a body of work, not a scatter of posts.' },
  { title: 'Contract Management', desc: 'Every agreement reviewed, tracked and enforced \u2014 exclusivity windows, deliverables and renewals included.' },
]

const PROCESS = [
  { step: '01', title: 'Onboard', desc: 'We learn the talent\u2019s story, audience and ambitions before we pitch a single brand.' },
  { step: '02', title: 'Position', desc: 'We define the categories, rate card and brand-fit criteria that guide every opportunity.' },
  { step: '03', title: 'Pitch', desc: 'We take the talent to brands whose audience and values genuinely overlap.' },
  { step: '04', title: 'Grow', desc: 'We track performance and renegotiate as the talent\u2019s influence compounds.' },
]

const RELATED = [
  { to: '/services/brand-partnerships', label: 'Brand Partnerships' },
  { to: '/services/social-influencer', label: 'Social & Influencer' },
  { to: '/services/pr-media', label: 'PR & Media' },
]

function TalentManagement() {
  return (
    <>
      <Banner
        kicker="Talent Management"
        title={'Representation built around the\n**story**'}
        subtitle="We manage creators, performers and personalities \u2014 turning influence into a long-term career, not a string of one-off deals."
        crumb="Services / Talent Management"
        align="left"
      />

      <FadeIn>
        <section className="section" style={{ paddingTop: 70 }}>
          <div className="container">
            <div className="grid-2">
              <div>
                <span className="eyebrow">What We Do</span>
                <AnimatedText
                  text="Management that protects the story, not just the deal"
                  className="h2-style"
                  elementType="h2"
                  style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
                />
                <p>
                  Too many talent deals get chased for the fee and forgotten a season later. We
                  manage careers, not transactions \u2014 building a roster of brand relationships
                  that compound instead of competing with each other.
                </p>
                <p>
                  From negotiation to contract terms to what a talent says yes and no to, we sit
                  alongside them as the team that protects the long game.
                </p>
                <Link to="/contact" className="btn btn--ghost">Talk To Us About Representation</Link>
              </div>
              <div>
                <div className="testimonial-card">
                  <div className="testimonial-card__mark">"</div>
                  <p className="testimonial-card__quote">
                    KNOTENT doesn\u2019t just find me deals \u2014 they tell me which ones to walk away
                    from. That\u2019s been worth more than any single contract.
                  </p>
                  <div className="testimonial-card__name">Represented Creator</div>
                  <div className="testimonial-card__role">Lifestyle & Fashion</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="stat-row">
          <div className="stat">
            <div className="stat__num">40+</div>
            <div className="stat__label">Talent Represented</div>
          </div>
          <div className="stat">
            <div className="stat__num">150+</div>
            <div className="stat__label">Deals Negotiated</div>
          </div>
          <div className="stat">
            <div className="stat__num">3x</div>
            <div className="stat__label">Avg. Rate Growth</div>
          </div>
          <div className="stat">
            <div className="stat__num">12</div>
            <div className="stat__label">Categories Covered</div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What's Included</span>
                <AnimatedText text="Full-service representation" />
              </div>
              <p>Everything a talent needs to turn attention into a sustainable career.</p>
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
            <AnimatedText text="Ready to be represented right?" />
            <p>Whether you're a talent or a brand looking to work with one, let's talk.</p>
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

export default TalentManagement
