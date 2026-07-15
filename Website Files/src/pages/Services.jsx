import Banner from '../components/Banner.jsx'
import ServicesCard from '../components/ServicesCard.jsx'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    index: '01',
    icon: '★',
    title: 'Talent Management',
    desc: 'End-to-end representation for creators, performers and personalities.',
    items: ['Brand Deal Negotiation', 'Career Positioning', 'Portfolio Development', 'Contract Management'],
  },
  {
    index: '02',
    icon: '◎',
    title: 'Brand Partnerships',
    desc: 'Matching brands with talent whose audience and story actually fit.',
    items: ['Talent Matchmaking', 'Campaign Concepting', 'Deal Structuring', 'Performance Tracking'],
  },
  {
    index: '03',
    icon: '▲',
    title: 'PR & Media',
    desc: 'Earned coverage and reputation strategy that builds lasting credibility.',
    items: ['Press Outreach', 'Media Relations', 'Reputation Management', 'Crisis Communication'],
  },
  {
    index: '04',
    icon: '✺',
    title: 'Event Activations',
    desc: 'Experiential moments engineered to get people talking — and posting.',
    items: ['Launch Events', 'Red Carpet Strategy', 'Pop-Ups & Experiences', 'On-Ground Production'],
  },
  {
    index: '05',
    icon: '◈',
    title: 'Social & Influencer',
    desc: 'Creator-led campaigns and content systems built for the feed.',
    items: ['Influencer Campaigns', 'Content Strategy', 'Community Management', 'Paid Social Amplification'],
  },
  {
    index: '06',
    icon: '✦',
    title: 'Brand Strategy',
    desc: 'The positioning and narrative work that gives a brand something to spotlight.',
    items: ['Brand Positioning', 'Identity & Voice', 'Market Research', 'Go-To-Market Planning'],
  },
]

const PROCESS = [
  { step: '01', title: 'Discover', desc: 'We audit your brand, audience and market to find the real opportunity.' },
  { step: '02', title: 'Design', desc: 'We shape the strategy, talent match and creative concept around one clear objective.' },
  { step: '03', title: 'Deliver', desc: 'Full execution — from negotiation to production to press day.' },
  { step: '04', title: 'Decode', desc: 'We measure what worked and feed it back into the next campaign.' },
]

function Services() {
  return (
    <>
      <Banner
        kicker="What We Do"
        title="Services built for the **spotlight**"
        subtitle="A full-stack talent, brand and entertainment marketing offering — pick a single service or let us run the whole campaign."
        crumb="Services"
      />

      <section className="section" style={{ paddingTop: 70 }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <ServicesCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">How We Work</span>
              <h2>Our process</h2>
            </div>
            <p>A repeatable framework that keeps every campaign objective-driven, start to finish.</p>
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

      <section className="cta-band">
        <div className="spotlight-field">
          <div className="spotlight-beam b1" />
          <div className="spotlight-beam b2" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2>Not sure which service you need?</h2>
          <p>Tell us the goal — we'll map the right mix of services to get you there.</p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--primary">Talk To Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
