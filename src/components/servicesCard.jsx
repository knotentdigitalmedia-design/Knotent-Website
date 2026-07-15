/**
 * ServicesCard
 * Props:
 *  - index: display number, e.g. "01"
 *  - icon: short glyph/emoji-free icon character (we use simple unicode glyphs)
 *  - title: service title
 *  - desc: short description
 *  - items: optional array of sub-service strings
 */
function ServicesCard({ index, icon, title, desc, items = [] }) {
  return (
    <article className="service-card">
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
    </article>
  )
}

export default ServicesCard
