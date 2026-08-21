import { Link } from 'react-router-dom'
import Banner from '../components/Banner.jsx'
import FadeIn from '../components/FadeIn.jsx'
import AnimatedText from '../components/AnimatedText.jsx'

const OFFERINGS = [
  { title: 'Influencer Campaigns', desc: 'Creator casting and campaign management built around genuine audience fit.' },
  { title: 'Content Strategy', desc: 'A content calendar and creative direction that gives every post a job to do.' },
  { title: 'Community Management', desc: 'Real engagement with a brand\'s audience — replies, moderation and tone, handled consistently.' },
  { title: 'Paid Social Amplification', desc: 'Boosting the content that\'s already working, targeted at the audience most likely to convert.' },
]

const PROCESS = [
  { step: '01', title: 'Research', desc: 'We study the audience, platform trends and what\'s currently earning attention.' },
  { step: '02', title: 'Cast', desc: 'We select creators whose voice fits the brand as naturally as their following does.' },
  { step: '03', title: 'Create', desc: 'We produce content built for the platform it\'s actually going to live on.' },
  { step: '04', title: 'Amplify', desc: 'We push what works further with paid support and community management.' },
]

const RELATED = [
  { to: '/services/talent-management', label: 'Talent Management' },
  { to: '/services/brand-partnerships', label: 'Brand Partnerships' },
  { to: '/services/event-activations', label: 'Event Activations' },
]

function SocialInfluencer() {
  return (
    <>
      <Banner
        kicker="Social & Influencer"
        title={'Content systems built for the\n**feed**'}
        subtitle="Creator campaigns, community management and paid amplification that convert scroll-stopping moments into results."
        crumb="Services / Social & Influencer"
        align="left"
      />

      <FadeIn>
        <section className="section" style={{ paddingTop: 70 }}>
          <div className="container">
            <div className="grid-2">
              <div>
                <span className="eyebrow">What We Do</span>
                <AnimatedText
                  text="Content built to stop the scroll on purpose"
                  className="h2-style"
                  elementType="h2"
                  style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
                />
                <p>
                  Social only works when it's built as a system, not a series of one-off posts.
                  We combine creator campaigns, owned content and paid amplification into one
                  strategy — so every piece of content earns its place in the feed.
                </p>
                <p>
                  From creator casting to community replies, we run the full social engine, not
                  just the campaign highlights.
                </p>
                <Link to="/contact" className="btn btn--ghost">Talk To Our Social Team</Link>
              </div>
              <div>
                <div className="testimonial-card">
                  <div className="testimonial-card__mark">"</div>
                  <p className="testimonial-card__quote">
                    Creator-led storytelling gave our launch a voice we couldn't have built with
                    paid media alone. The conversion lift was immediate.
                  </p>
                  <div className="testimonial-card__name">Growth Lead</div>
                  <div className="testimonial-card__role">D2C Brand</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="stat-row">
          <div className="stat">
            <div className="stat__num">300+</div>
            <div className="stat__label">Creator Collabs</div>
          </div>
          <div className="stat">
            <div className="stat__num">45M+</div>
            <div className="stat__label">Cumulative Reach</div>
          </div>
          <div className="stat">
            <div className="stat__num">210%</div>
            <div className="stat__label">Avg. Conversion Growth</div>
          </div>
          <div className="stat">
            <div className="stat__num">6</div>
            <div className="stat__label">Platforms Managed</div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What's Included</span>
                <AnimatedText text="A full social & influencer engine" />
              </div>
              <p>Strategy, creators and paid support working as one system.</p>
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
            <AnimatedText text="Ready to own the feed?" />
            <p>Let's build a content system that does more than post on schedule.</p>
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

export default SocialInfluencer
