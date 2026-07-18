import { Link } from 'react-router-dom'
import Banner from '../components/Banner.jsx'
import ServicesCard from '../components/ServicesCard.jsx'
import FadeIn from '../components/FadeIn.jsx'
import heroBanner from '../Images/Knotent Hero Banner.png'

const SERVICES = [
  {
    index: '01',
    icon: '★',
    title: 'Talent Management',
    desc: 'Representing and positioning talent for brand deals that fit their story, not just their following.',
  },
  {
    index: '02',
    icon: '◎',
    title: 'Brand Partnerships',
    desc: 'Matching brands with the right faces and platforms to put them exactly where attention lives.',
  },
  {
    index: '03',
    icon: '▲',
    title: 'PR & Media',
    desc: 'Earned media, press strategy and reputation management that keeps a brand in the right headlines.',
  },
  {
    index: '04',
    icon: '✺',
    title: 'Event Activations',
    desc: 'Launches, red-carpet moments and experiential activations engineered for the spotlight.',
  },
  {
    index: '05',
    icon: '◈',
    title: 'Social & Influencer',
    desc: 'Creator campaigns and content systems built to convert scroll-stopping moments into results.',
  },
  {
    index: '06',
    icon: '✦',
    title: 'Brand Strategy',
    desc: 'Positioning, identity and narrative work that gives a brand something worth spotlighting.',
  },
]

const CLIENTS = [
  'Arihant Caterers', 'Arihant Constructions',
]

function Home() {
  return (
    <>
      <Banner
        variant="home"
        image={heroBanner}
        kicker="Talent · Brand · Entertainment"
        title="Tying brands to the **spotlights**"
        subtitle="KNOTENT connects ambitious brands with the talent, moments and media that make people stop scrolling and start paying attention."
        actions={[
          { label: 'Start a Project', to: '/contact' },
          { label: 'Our Services', to: '/services', variant: 'btn--ghost' },
        ]}
      />

      <FadeIn delay={0.2}>
        <div className="stat-row">
          <div className="stat">
            <div className="stat__num">180+</div>
            <div className="stat__label">Brand Campaigns</div>
          </div>
          <div className="stat">
            <div className="stat__num">90+</div>
            <div className="stat__label">Talent Partnerships</div>
          </div>
          <div className="stat">
            <div className="stat__num">4</div>
            <div className="stat__label">Cities, One Studio</div>
          </div>
          <div className="stat">
            <div className="stat__num">9 yrs</div>
            <div className="stat__label">In The Business</div>
          </div>
        </div>
      </FadeIn>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <FadeIn>
              <div>
                <span className="eyebrow">Who We Are</span>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                  We don't just book placements. We build the moment worth booking.
                </h2>
                <p>
                  KNOTENT is a talent, brand and entertainment marketing studio. We sit at the
                  intersection of culture and commerce — pairing brands with the right talent,
                  platforms and storytelling so the partnership feels inevitable, not paid for.
                </p>
                <p>
                  Every brief starts with the same question: what deserves the spotlight here,
                  and how do we get it there? From there we build campaigns, not checklists.
                </p>
                <Link to="/about" className="btn btn--ghost">Learn Our Approach</Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div>
                <div className="value-list">
                  <div className="value-item">
                    <h4>Strategy First</h4>
                    <p>No campaign starts without a clear objective and a way to measure it.</p>
                  </div>
                  <div className="value-item">
                    <h4>Culture Fluent</h4>
                    <p>We track where attention is moving, not where it used to be.</p>
                  </div>
                  <div className="value-item">
                    <h4>Talent Network</h4>
                    <p>A vetted roster of creators, personalities and performers.</p>
                  </div>
                  <div className="value-item">
                    <h4>Full Execution</h4>
                    <p>From pitch to press day, one team owns the outcome.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <FadeIn>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What We Do</span>
                <h2>Services built for the spotlight</h2>
              </div>
              <p>A full-stack approach to putting brands in front of the people who matter to them.</p>
            </div>
          </div>
        </FadeIn>
        <div className="container" style={{ padding: 0 }}>
          <div className="services-grid">
            {SERVICES.map((s, index) => (
              <FadeIn delay={index * 0.1} key={s.title}>
                <ServicesCard {...s} />
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn>
          <div className="container" style={{ marginTop: 40, textAlign: 'center' }}>
            <Link to="/services" className="btn btn--primary">View All Services</Link>
          </div>
        </FadeIn>
      </section>

      <FadeIn>
        <section className="marquee">
          <div className="marquee__track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span className="marquee__item" key={c + i}>{c}</span>
            ))}
          </div>
        </section>
      </FadeIn>

      <section className="section">
        <FadeIn>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Client Voices</span>
                <h2>What our partners say</h2>
              </div>
            </div>
            <div className="grid-2">
              <div className="testimonial-card">
                <div className="testimonial-card__mark">"</div>
                <p className="testimonial-card__quote">
                  KNOTENT understood our brand faster than any agency we'd worked with before.
                  The talent match they found felt organic, and the results showed it.
                </p>
                <div className="testimonial-card__name">Marketing Lead</div>
                <div className="testimonial-card__role">D2C Fashion Brand</div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-card__mark">"</div>
                <p className="testimonial-card__quote">
                  From concept to press day, the team owned every detail. Our launch event
                  got more earned coverage than we'd planned for the entire quarter.
                </p>
                <div className="testimonial-card__name">Founder</div>
                <div className="testimonial-card__role">Consumer Tech Startup</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="cta-band">
        <div className="spotlight-field">
          <div className="spotlight-beam b1" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Ready When You Are</span>
          <h2>Let's put your brand in the light</h2>
          <p>Tell us where you want to be seen — we'll build the path to get there.</p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--primary">Get In Touch</Link>
            <Link to="/clients" className="btn btn--ghost">See Our Clients</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
