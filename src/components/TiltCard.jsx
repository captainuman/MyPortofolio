import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.2, 0.2], [5, -5]), { stiffness: 100, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.2, 0.2], [-5, 5]), { stiffness: 100, damping: 20 })

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.1)
    y.set((e.clientY - rect.top) / rect.height - 0.1)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )
}