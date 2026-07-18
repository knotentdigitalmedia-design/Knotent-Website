import { motion } from 'framer-motion'

export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay }}
    >
      {children}
    </motion.div>
  )
}


