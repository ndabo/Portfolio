'use client'

// Phase 3 — SWE Agent will implement scroll-triggered count-up animation
// Placeholder passes the value through until Framer Motion animation is wired

interface AnimatedCounterProps {
  value: string
  className?: string
}

export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  return <span className={className}>{value}</span>
}
