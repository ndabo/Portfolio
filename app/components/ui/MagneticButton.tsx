'use client'

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  /** How far the element drifts toward the cursor (px). */
  strength?: number
  className?: string
}

/**
 * Wraps content in a subtle cursor-following "magnetic" effect.
 * Disabled for touch / coarse pointers and when reduced-motion is requested.
 */
export default function MagneticButton({
  children,
  strength = 14,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    // Coarse pointers (touch) report no fine hover — skip the effect.
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set((relX / (rect.width / 2)) * strength)
    y.set((relY / (rect.height / 2)) * strength)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
