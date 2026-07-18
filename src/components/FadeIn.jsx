import { motion } from 'framer-motion'

export default function FadeIn({ children, delay = 0, direction = 'left' }) {
  const xOffset = direction === 'left' ? -50 : (direction === 'right' ? 50 : 0);
  const yOffset = direction === 'up' ? 50 : (direction === 'down' ? -50 : 0);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset, y: yOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

