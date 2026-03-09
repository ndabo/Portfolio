'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaRocket, FaFileAlt, FaEnvelope } from 'react-icons/fa'
import HeroStats from './HeroStats'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col min-h-screen bg-bg-dark grid-pattern">

      {/* Split layout — photo + content */}
      <div className="flex flex-1 flex-col gap-10 px-6 md:px-12 lg:px-24 py-16 md:flex-row md:items-center max-w-[1200px] mx-auto w-full">

        {/* ── Left: Photo ── */}
        <motion.div
          className="relative w-full md:w-1/2 aspect-square max-w-[500px] mx-auto group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Glow halo */}
          <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl group-hover:bg-primary/20 transition-all duration-700" />

          {/* Photo frame */}
          <div className="relative h-full w-full rounded-2xl border-2 border-primary/30 overflow-hidden bg-slate-800">
            <Image
              src="/athletics/dabo.jpg"
              alt="N'Famara Dabo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              priority
            />

            {/* Status badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-bg-dark/80 backdrop-blur-md p-4 rounded-lg border border-primary/20">
              <div className="flex justify-between items-center">
                <span className="section-label text-primary">System Status</span>
                <span className="flex items-center gap-1.5 text-xs text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Optimal
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right: Content ── */}
        <div className="flex flex-col gap-6 md:w-1/2">

          {/* Brown University badge */}
          <motion.div {...fadeUp(0.1)}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="section-label text-primary">
                Brown University · CS &amp; Economics
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter"
            {...fadeUp(0)}
          >
            N&apos;Famara <span className="text-primary">Dabo</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl font-medium text-slate-400 border-l-4 border-primary pl-6 py-2 italic"
            {...fadeUp(0.2)}
          >
            AI | Data Science | Systems | Division I Student-Athlete
          </motion.p>

          {/* Bio */}
          <motion.p
            className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed"
            {...fadeUp(0.4)}
          >
            Building intelligent systems, data models, and scalable technical solutions
            with the discipline of a high-performance athlete. CS &amp; Economics @
            Brown University.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-wrap gap-4 pt-2" {...fadeUp(0.6)}>
            <Link
              href="#projects"
              className="flex items-center gap-2 min-w-[160px] justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold transition-all hover:bg-primary-hover hover:scale-105 active:scale-95"
            >
              <FaRocket size={15} />
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 min-w-[140px] justify-center rounded-lg h-14 px-6 border-2 border-primary/30 text-slate-100 text-base font-bold transition-all hover:bg-primary/10"
            >
              <FaFileAlt size={15} />
              Resume
            </a>

            <Link
              href="#contact"
              className="flex items-center gap-2 px-6 h-14 text-slate-400 text-base font-bold transition-all hover:text-slate-100"
            >
              <FaEnvelope size={15} />
              Contact
            </Link>
          </motion.div>
        </div>
      </div>

      <HeroStats />
    </section>
  )
}
