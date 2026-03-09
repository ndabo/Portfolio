'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'

const TRAITS = [
  {
    title: 'Teamwork',
    desc: 'Collaborating under high pressure.',
  },
  {
    title: 'Resilience',
    desc: 'Adapting to technical challenges.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function AthleticsSection() {
  return (
    <section id="athletics" className="px-6 py-20 md:px-12 lg:px-24 bg-bg-dark">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:flex-row md:items-center">

        {/* Left: Photo */}
        <motion.div
          className="w-full md:w-1/2 relative group"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-xl opacity-50" />
          <div className="relative h-[360px] sm:h-[500px] w-full rounded-xl overflow-hidden border border-primary/20 shadow-2xl bg-slate-800">
            <Image
              src="/athletics/athlete.JPG"
              alt="N'Famara Dabo — Division I Athlete"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-dark to-transparent p-8">
              <div className="flex items-center gap-2 text-primary">
                <FaMapMarkerAlt size={12} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Brown University | Providence, RI
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">

          <motion.div className="flex flex-col gap-4" {...fadeUp(0.1)}>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Dual Discipline
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
              The Intersection of{' '}
              <span className="text-primary italic">High-Level Athletics</span>{' '}
              &amp; Technical Discipline
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Division I Student-Athlete at Brown University. I bridge the gap between AI, Data
              Science, and Software Engineering using the same resilience and leadership forged on
              the competitive field.
            </p>
          </motion.div>

          {/* Trait cards */}
          <motion.div className="grid grid-cols-2 gap-6" {...fadeUp(0.25)}>
            {TRAITS.map((t) => (
              <div key={t.title} className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <h4 className="font-bold text-slate-100">{t.title}</h4>
                <p className="text-sm text-slate-500">{t.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div className="flex gap-4" {...fadeUp(0.4)}>
            <Link
              href="#projects"
              className="flex-1 md:flex-none min-w-[180px] bg-primary text-white h-12 rounded-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              Technical Work <FaArrowRight size={13} />
            </Link>
            <a
              href="https://www.espn.com/mens-college-basketball/player/_/id/5175857/nfamara-dabo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none min-w-[180px] border border-primary/50 text-primary h-12 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
            >
              Athletic Bio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
