'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  /** Entrance direction. Defaults to a gentle fade-up. */
  direction?: Direction
  /** Stagger/sequence delay in seconds. */
  delay?: number
  /** Travel distance in px. */
  distance?: number
  /** Animation duration in seconds. */
  duration?: number
  className?: string
}

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * Scroll-triggered reveal. Fades + slides content into view once.
 * Falls back to an instant opacity fade when reduced-motion is requested.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  distance,
  duration = 0.6,
  className,
}: RevealProps) {
  const reduce = useReducedMotion()

  const base = OFFSET[direction]
  const off = distance != null
    ? { x: Math.sign(base.x) * distance, y: Math.sign(base.y) * distance }
    : base

  const variants: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.3, delay } },
      }
    : {
        hidden: { opacity: 0, x: off.x, y: off.y },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
        },
      }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}
