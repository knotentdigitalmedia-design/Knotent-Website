import { motion } from 'framer-motion'

export default function AnimatedText({ text, elementType = 'h2', className = '', delay = 0, style = {} }) {
  if (!text) return null
  
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    },
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: 'spring', damping: 15, stiffness: 200 },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -45,
      transition: { type: 'spring', damping: 15, stiffness: 200 },
    },
  }

  const Tag = motion[elementType]

  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-50px' }}
      style={{ display: 'flex', flexWrap: 'wrap', columnGap: '0.25em', ...style }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} style={{ display: 'inline-block', transformOrigin: 'bottom' }}>
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
