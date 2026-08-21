import { Link } from 'react-router-dom'
import Banner from '../components/Banner.jsx'
import FadeIn from '../components/FadeIn.jsx'
import AnimatedText from '../components/AnimatedText.jsx'

const OFFERINGS = [
  { title: 'Brand Positioning', desc: 'A clear, defensible answer to why a brand exists and who it exists for.' },
  { title: 'Identity & Voice', desc: 'Visual and verbal identity that stays recognizable across every campaign and platform.' },
  { title: 'Market Research', desc: 'Category, competitor and audience research that grounds strategy in reality, not assumption.' },
  { title: 'Go-To-Market Planning', desc: 'A launch roadmap that sequences positioning, talent, press and social into one plan.' },
]

const PROCESS = [
  { step: '01', title: 'Discover', desc: 'We audit the brand, category and audience to find the real opportunity.' },
  { step: '02', title: 'Define', desc: 'We set the positioning and narrative every future campaign will be measured against.' },
  { step: '03', title: 'Design', desc: 'We shape identity, voice and messaging into something usable day to day.' },
  { step: '04', title: 'Deploy', desc: 'We sequence the go-to-market plan across talent, PR, events and social.' },
]

const RELATED = [
  { to: '/services/pr-media', label: 'PR & Media' },
  { to: '/services/brand-partnerships', label: 'Brand Partnerships' },
  { to: '/services/social-influencer', label: 'Social & Influencer' },
]

function BrandStrategy() {
  return (
    <>
      <Banner
        kicker="Brand Strategy"
        title={'Give your brand something worth\n**spotlighting**'}
        subtitle="Positioning, identity and go-to-market work that gives every campaign after it a clear story to tell."
        crumb="Services / Brand Strategy"
        align="left"
      />

      <FadeIn>
        <section className="section" style={{ paddingTop: 70 }}>
          <div className="container">
            <div className="grid-2">
              <div>
                <span className="eyebrow">What We Do</span>
                <AnimatedText
                  text="Strategy before spend, every time"
                  className="h2-style"
                  elementType="h2"
                  style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
                />
                <p>
                  No talent match, press push or activation works if the brand underneath it
                  isn&rsquo;t clear on what it stands for. We build the positioning, identity and
                  narrative work that gives every later campaign something real to build on.
                </p>
                <p>
                  This is the service that usually comes first &mdash; and quietly makes
                  everything else we do work harder.
                </p>
                <Link to="/contact" className="btn btn--ghost">Start With Strategy</Link>
              </div>
              <div>
                <div className="testimonial-card">
                  <div className="testimonial-card__mark">"</div>
                  <p className="testimonial-card__quote">
                    A young team with senior-level instincts. We&rsquo;ve seen a real, measurable
                    shift in how our brand is perceived since we started working together.
                  </p>
                  <div className="testimonial-card__name">Head of Marketing</div>
                  <div className="testimonial-card__role">Consumer Tech</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="stat-row">
          <div className="stat">
            <div className="stat__num">50+</div>
            <div className="stat__label">Brands Positioned</div>
          </div>
          <div className="stat">
            <div className="stat__num">9 yrs</div>
            <div className="stat__label">Building Brands</div>
          </div>
          <div className="stat">
            <div className="stat__num">6</div>
            <div className="stat__label">Categories Covered</div>
          </div>
          <div className="stat">
            <div className="stat__num">100%</div>
            <div className="stat__label">Research-Backed</div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What's Included</span>
                <AnimatedText text="The foundation every campaign stands on" />
              </div>
              <p>Strategy work that gives a brand something worth spotlighting in the first place.</p>
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
            <AnimatedText text="Need a story worth telling?" />
            <p>Let's build the positioning that makes every campaign after it easier.</p>
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

export default BrandStrategy
