import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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
function Banner({ kicker, title, subtitle, crumb, variant = 'default', actions = [], children, image, align = 'center' }) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const child = {
    hidden: { opacity: 0, y: 30, rotateX: -40 },
    visible: {
      opacity: 1, y: 0, rotateX: 0,
      transition: { type: 'spring', damping: 15, stiffness: 200 },
    },
  }

  const renderTitle = () => {
    if (!title) return null
    // Support newline via \n
    const lines = title.split('\n')
    
    return (
      <div style={{ textAlign: align }}>
        {lines.map((line, lineIdx) => {
          const parts = line.split('**')
          return (
            <motion.h1 
              key={lineIdx}
              className="banner__title"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: align === 'left' ? 'flex-start' : 'center', columnGap: '0.25em', margin: 0 }}
            >
              {parts.map((part, i) => {
                const words = part.split(' ').filter(w => w !== '')
                return words.map((word, j) => (
                  <motion.span 
                    key={`${i}-${j}`} 
                    variants={child} 
                    style={{ display: 'inline-block', transformOrigin: 'bottom' }}
                  >
                    {i % 2 === 1 ? <em>{word}</em> : word}
                  </motion.span>
                ))
              })}
            </motion.h1>
          )
        })}
      </div>
    )
  }

  return (
    <section className={'banner' + (variant === 'home' ? ' banner--home' : '')}>
      {image && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 0,
          opacity: 0.3
        }}>
          <img src={image} alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}
      <div className="spotlight-field">
        <div className="spotlight-beam b1" />
        <div className="spotlight-beam b2" />
      </div>
      <motion.div 
        className="banner__inner"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
        style={{ textAlign: align, alignItems: align === 'left' ? 'flex-start' : 'center', display: 'flex', flexDirection: 'column' }}
      >
        {kicker && <span className="banner__kicker">{kicker}</span>}
        {renderTitle()}
        {subtitle && <p className="banner__subtitle" style={{ textAlign: align }}>{subtitle}</p>}
        {crumb && (
          <div className="banner__crumb" style={{ justifyContent: align === 'left' ? 'flex-start' : 'center' }}>
            <span className="red">KNOTENT</span> &nbsp;/&nbsp; {crumb}
          </div>
        )}
        {actions.length > 0 && (
          <div className="banner__actions" style={{ justifyContent: align === 'left' ? 'flex-start' : 'center' }}>
            {actions.map((a) => (
              <Link key={a.label} to={a.to} className={'btn ' + (a.variant || 'btn--primary')}>
                {a.label}
              </Link>
            ))}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  )
}

export default Banner
