import { motion } from 'framer-motion'

export default function FadeIn({ children, delay = 0, y = 50 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay }}
    >
      {children}
    </motion.div>
  )
}


