'use client'

import { motion } from 'framer-motion'

const STATS = [
  { label: 'GPA', value: '3.6', sub: 'Academic Excellence' },
  { label: 'Seasons', value: '4', sub: 'Varsity Athletics' },
  { label: 'Projects', value: '6+', sub: 'Technical Work' },
  { label: 'Yrs Data', value: '20', sub: 'MVP Model Dataset' },
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
              className="group flex flex-col gap-1 p-6 bg-bg-dark hover:bg-primary/5 transition-colors duration-300"
            >
              <span className="section-label text-slate-600 group-hover:text-slate-500 transition-colors">
                {s.sub}
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="font-bebas text-5xl leading-none text-slate-100 group-hover:text-primary transition-colors duration-300">
                  {s.value}
                </span>
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
              <span className="w-1 h-1 rounded-full bg-primary/50" />
            </span>
          ))}
        </div>
      </motion.div>
    </>
  )
}
