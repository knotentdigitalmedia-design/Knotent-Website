import { useParams, Link } from "react-router-dom";
import { services } from "../data/servicesData";
import Banner from "../components/Banner";
import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Service Not Found</h1>
        <Link to="/services" className="btn btn--primary">Back to all services</Link>
      </div>
    );
  }

  return (
    <>
      <Banner
        kicker={service.id}
        title={service.title}
        crumb={`Services / ${service.title}`}
        align="left"
      />

      <FadeIn>
        <section className="section" style={{ paddingTop: 70 }}>
          <div className="container">
            <div className="grid-2">
              <div>
                <span className="eyebrow">Overview</span>
                <AnimatedText
                  text={service.title}
                  className="h2-style"
                  elementType="h2"
                  style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
                />
                <p style={{ fontSize: '18px', maxWidth: '600px', lineHeight: 1.6 }}>
                  {service.desc}
                </p>
                <div style={{ marginTop: '32px' }}>
                  <Link to="/contact" className="btn btn--primary">Talk To Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
};

export default ServiceDetail;
