import { useParams, Navigate, Link } from 'react-router-dom'
import { SERVICES } from '../data/services.js'
import Banner from '../components/Banner.jsx'
import FadeIn from '../components/FadeIn.jsx'

function ServiceDetail() {
  const { id } = useParams()
  const service = SERVICES.find((s) => s.id === id)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <>
      <Banner
        kicker={`Service ${service.index}`}
        title={service.title}
        subtitle={service.desc}
        crumb={service.title}
      />

      <FadeIn>
        <section className="section" style={{ paddingTop: 70 }}>
          <div className="container">
            <div className="grid-2">
              <div>
                <h2>What this includes</h2>
                <p>
                  This is a placeholder for the detailed content about {service.title}. 
                  Here you can expand on your approach, the specific value you provide, 
                  and what the client can expect when they hire you for this service.
                </p>
                <p>
                  We build strategies that put your brand in the spotlight. Every campaign is 
                  custom-tailored to ensure maximum impact and measurable results.
                </p>
                <div style={{ marginTop: 40 }}>
                  <Link to="/contact" className="btn btn--primary">Inquire About This Service</Link>
                </div>
              </div>
              
              <div>
                <div className="value-list">
                  {service.items && service.items.map((item, i) => (
                    <div className="value-item" key={i}>
                      <h4>{item}</h4>
                      <p>Core offering related to {item.toLowerCase()} strategy and execution.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  )
}

export default ServiceDetail
