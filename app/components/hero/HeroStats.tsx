'use client'

import { motion } from 'framer-motion'
import { FaChartBar, FaDumbbell } from 'react-icons/fa'

const STATS = [
  {
    label: 'Academic Excellence',
    metric: '3.6',
    unit: 'GPA',
    fill: 'w-[97%]',
    icon: <FaChartBar className="text-primary" size={20} />,
  },
  {
    label: 'Athletic Tenure',
    metric: '4',
    unit: 'Varsity Seasons',
    fill: 'w-full',
    icon: <FaDumbbell className="text-primary" size={20} />,
  },
]

const AFFILIATIONS = [
  'BROWN UNIVERSITY',
  'IVY LEAGUE',
  'MOSAIC PLUS PROGRAM',
  'DIV I ATHLETICS',
]

export default function HeroStats() {
  return (
    <>
      {/* Stats cards */}
      <motion.section
        className="border-t border-primary/20 py-12 px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group flex flex-col gap-4 p-8 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary transition-all card-glow"
            >
              <div className="flex items-center justify-between">
                <p className="section-label text-slate-400">{s.label}</p>
                {s.icon}
              </div>
              <div className="flex items-end gap-2">
                <h3 className="text-4xl font-black">{s.metric}</h3>
                <span className="text-slate-500 mb-1 text-sm">{s.unit}</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className={`bg-primary h-full rounded-full ${s.fill}`} />
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Affiliations strip */}
      <motion.div
        className="flex items-center justify-center gap-8 md:gap-12 py-10 flex-wrap px-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        {AFFILIATIONS.map((a) => (
          <span
            key={a}
            className="text-xl font-bold italic tracking-tighter text-slate-100"
          >
            {a}
          </span>
        ))}
      </motion.div>
    </>
  )
}
