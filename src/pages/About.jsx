import Banner from '../components/Banner.jsx'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn.jsx'
import AnimatedText from '../components/AnimatedText.jsx'

const VALUES = [
  { title: 'Curiosity', desc: 'We study culture before we plan a campaign — trends, timing and the audience behind them.' },
  { title: 'Craft', desc: 'Every deliverable, from a single post to a full activation, is held to the same bar.' },
  { title: 'Candor', desc: 'We tell clients what will work and what won\'t, even when it isn\'t what they expected to hear.' },
  { title: 'Commitment', desc: 'We stay accountable to outcomes, not just outputs.' },
]

function About() {
  return (
    <>
      <Banner
        kicker="About KNOTENT"
        title={'The studio behind the\n**spotlight**'}
        subtitle="We're a small team with a simple belief: the right brand, paired with the right talent and the right moment, is unstoppable."
        crumb="About"
        align="left"
      />

      <FadeIn>
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Our Story</span>
              <AnimatedText text="Built by people who love the chase of a good story" className="h2-style" elementType="h2" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }} />
              <p>
                KNOTENT started with a frustration: too many brand-talent partnerships felt
                forced, and too many agencies treated placements like line items instead of
                relationships. We set out to do it differently — building genuine matches
                between brands and the people who can carry their story authentically.
              </p>
              <p>
                Today we work across talent management, brand partnerships, PR, events and
                social strategy, but the mission hasn't changed: tie brands to the moments
                where people are actually paying attention.
              </p>
              <Link to="/services" className="btn btn--ghost">Explore What We Do</Link>
            </div>
            <div>
              <div className="testimonial-card">
                <div className="testimonial-card__mark">"</div>
                <p className="testimonial-card__quote">
                  Think different. The people who are crazy enough to think they can change
                  the world are the ones who do.
                </p>
                <div className="testimonial-card__name">A Reminder We Keep On The Wall</div>
                <div className="testimonial-card__role">Our Inspiration</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn delay={0.2}>
      <div className="stat-row">
        <div className="stat">
          <div className="stat__num">180+</div>
          <div className="stat__label">Campaigns Delivered</div>
        </div>
        <div className="stat">
          <div className="stat__num">9 yrs</div>
          <div className="stat__label">Building Brands</div>
        </div>
        <div className="stat">
          <div className="stat__num">4</div>
          <div className="stat__label">City Offices</div>
        </div>
        <div className="stat">
          <div className="stat__num">98%</div>
          <div className="stat__label">Client Retention</div>
        </div>
      </div>
      </FadeIn>

      <FadeIn>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What We Stand For</span>
              <AnimatedText text="Our values" />
            </div>
            <p>The standards that shape every campaign, pitch and partnership we build.</p>
          </div>
          <div className="value-list">
            {VALUES.map((v) => (
              <div className="value-item" key={v.title}>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Our Approach</span>
              <AnimatedText text="Objective first, tactics second" className="h2-style" elementType="h2" style={{ fontSize: 'clamp(26px, 4vw, 36px)' }} />
              <p>
                We never promise a result before we understand the brand. Every engagement
                begins with an audit of where you stand today, followed by a clear objective
                that every subsequent decision is measured against.
              </p>
            </div>
            <div>
              <span className="eyebrow">Our People</span>
              <AnimatedText text="A team obsessed with the details" className="h2-style" elementType="h2" style={{ fontSize: 'clamp(26px, 4vw, 36px)' }} />
              <p>
                Strategists, talent managers, creatives and media specialists working as one
                unit — so nothing gets lost between the pitch deck and the press day.
              </p>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="cta-band">
        <div className="spotlight-field">
          <div className="spotlight-beam b2" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <AnimatedText text="Want to build something with us?" />
          <p>We're always looking for brands and talent ready to take the stage.</p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--primary">Start a Conversation</Link>
          </div>
        </div>
      </section>
      </FadeIn>
    </>
  )
}

export default About
