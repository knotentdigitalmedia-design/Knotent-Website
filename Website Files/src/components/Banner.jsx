import { Link } from 'react-router-dom'

/**
 * Banner
 * Reusable page-hero with the animated "spotlight" signature motif.
 *
 * Props:
 *  - kicker: small red label above the title
 *  - title: main heading (wrap the emphasized word in **double asterisks** to highlight it in red)
 *  - subtitle: supporting paragraph
 *  - crumb: breadcrumb text shown under the subtitle (used on inner pages)
 *  - variant: "home" for the large full viewport hero, default for inner-page banners
 *  - actions: optional array of { label, to, variant } rendered as buttons
 *  - children: optional extra content rendered below the text block
 */
function Banner({ kicker, title, subtitle, crumb, variant = 'default', actions = [], children }) {
  const renderTitle = () => {
    if (!title) return null
    const parts = title.split('**')
    return parts.map((part, i) =>
      i % 2 === 1 ? <em key={i}>{part}</em> : <span key={i}>{part}</span>
    )
  }

  return (
    <section className={'banner' + (variant === 'home' ? ' banner--home' : '')}>
      <div className="spotlight-field">
        <div className="spotlight-beam b1" />
        <div className="spotlight-beam b2" />
      </div>
      <div className="banner__inner">
        {kicker && <span className="banner__kicker">{kicker}</span>}
        <h1 className="banner__title">{renderTitle()}</h1>
        {subtitle && <p className="banner__subtitle">{subtitle}</p>}
        {crumb && (
          <div className="banner__crumb">
            <span className="red">KNOTENT</span> &nbsp;/&nbsp; {crumb}
          </div>
        )}
        {actions.length > 0 && (
          <div className="banner__actions">
            {actions.map((a) => (
              <Link key={a.label} to={a.to} className={'btn ' + (a.variant || 'btn--primary')}>
                {a.label}
              </Link>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Banner
