/**
 * ServicesCard
 * Props:
 *  - index: display number, e.g. "01"
 *  - icon: short glyph/emoji-free icon character (we use simple unicode glyphs)
 *  - title: service title
 *  - desc: short description
 *  - items: optional array of sub-service strings
 */
import { Link } from 'react-router-dom'

function ServicesCard({ id, index, icon, title, desc, items = [] }) {
  const CardContent = (
    <article className="service-card" style={{ height: '100%', cursor: id ? 'pointer' : 'default' }}>
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
      {id && (
        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
          <span className="btn btn--ghost" style={{ padding: '8px 16px', fontSize: '11px' }}>Read More</span>
        </div>
      )}
    </article>
  )

  if (id) {
    return <Link to={`/services/${id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>{CardContent}</Link>
  }

  return CardContent
}

export default ServicesCard
