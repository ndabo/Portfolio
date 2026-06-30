'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '../ui/AnimatedCounter'

type Accent = 'primary' | 'data'

const STATS: { label: string; value: string; sub: string; accent: Accent }[] = [
  { label: 'GPA', value: '3.6', sub: 'Academic Excellence', accent: 'primary' },
  { label: 'Seasons', value: '4', sub: 'Varsity Athletics', accent: 'primary' },
  { label: 'Projects', value: '6+', sub: 'Technical Work', accent: 'data' },
  { label: 'Yrs Data', value: '20', sub: 'MVP Model Dataset', accent: 'data' },
]

const AFFILIATIONS = [
  'BROWN UNIVERSITY',
  'IVY LEAGUE',
  'MOSAIC+ PROGRAM',
  'DIV I ATHLETICS',
  'BROWN UNIVERSITY',
  'IVY LEAGUE',
  'MOSAIC+ PROGRAM',
  'DIV I ATHLETICS',
]

export default function HeroStats() {
  return (
    <>
      {/* Stats strip */}
      <motion.section
        className="relative z-10 border-t border-border-dark py-10 px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-border-dark rounded-xl overflow-hidden border border-border-dark">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group flex flex-col gap-1 p-6 bg-bg-dark hover:bg-white/[0.02] transition-colors duration-300"
            >
              <span className="section-label text-slate-600 group-hover:text-slate-500 transition-colors">
                {s.sub}
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <AnimatedCounter
                  value={s.value}
                  className={`font-bebas text-5xl leading-none text-slate-100 transition-colors duration-300 ${
                    s.accent === 'data'
                      ? 'group-hover:text-accent-blue'
                      : 'group-hover:text-primary'
                  }`}
                />
                <span className="section-label text-slate-600">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Affiliations marquee */}
      <motion.div
        className="overflow-hidden border-t border-border-dark py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <div className="marquee-track whitespace-nowrap">
          {AFFILIATIONS.map((a, i) => (
            <span
              key={`${a}-${i}`}
              className="inline-flex items-center gap-6 px-8 text-sm font-mono font-bold uppercase tracking-[0.25em] text-slate-700"
            >
              {a}
              <span className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-primary/50' : 'bg-accent-blue/50'}`} />
            </span>
          ))}
        </div>
      </motion.div>
    </>
  )
}
