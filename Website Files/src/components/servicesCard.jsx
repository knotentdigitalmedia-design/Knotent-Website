/**
 * ServicesCard
 * Props:
 *  - index: display number, e.g. "01"
 *  - icon: short glyph/emoji-free icon character (we use simple unicode glyphs)
 *  - title: service title
 *  - desc: short description
 *  - items: optional array of sub-service strings
 *  - to: optional route — when provided, the card links through to the service's detail page
 */
import { Link } from 'react-router-dom'

function ServicesCard({ index, icon, title, desc, items = [], to }) {
  const content = (
    <>
      {index && <span className="service-card__index">{index}</span>}
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{desc}</p>
      {items.length > 0 && (
        <ul className="service-card__list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {to && <span className="btn btn--ghost" style={{ marginTop: 16, display: 'inline-block' }}>Learn More</span>}
    </>
  )

  if (to) {
    return (
      <Link to={to} className="service-card" style={{ textDecoration: 'none', display: 'block' }}>
        {content}
      </Link>
    )
  }

  return <article className="service-card">{content}</article>
}

export default ServicesCard
