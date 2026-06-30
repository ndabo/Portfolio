'use client'

import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  /** Display value, e.g. "3.6", "6+", "20", "94%". */
  value: string
  className?: string
  /** Count-up duration hint (seconds). */
  duration?: number
}

/**
 * Counts up to the numeric portion of `value` when scrolled into view,
 * preserving any non-numeric prefix/suffix (e.g. "+", "%"). Honors the
 * decimal precision present in the target and respects reduced-motion.
 */
export default function AnimatedCounter({
  value,
  className,
  duration = 1.4,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const match = value.match(/-?\d*\.?\d+/)
  const target = match ? parseFloat(match[0]) : NaN
  const decimals = match && match[0].includes('.') ? match[0].split('.')[1].length : 0
  const prefix = match ? value.slice(0, match.index) : ''
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : value

  const mv = useMotionValue(0)
  const spring = useSpring(mv, {
    stiffness: 60,
    damping: 18,
    duration: duration * 1000,
  })
  const [display, setDisplay] = useState(() =>
    isNaN(target) ? value : `${prefix}0${suffix}`,
  )

  useEffect(() => {
    if (isNaN(target)) return
    if (reduce || !inView) {
      if (inView) setDisplay(value)
      return
    }
    mv.set(target)
  }, [inView, reduce, target, value, mv])

  useEffect(() => {
    if (isNaN(target)) return
    return spring.on('change', (latest) => {
      setDisplay(`${prefix}${latest.toFixed(decimals)}${suffix}`)
    })
  }, [spring, prefix, suffix, decimals, target])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
