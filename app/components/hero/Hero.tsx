'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaRocket, FaFileAlt, FaEnvelope } from 'react-icons/fa'
import HeroStats from './HeroStats'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
})

const TAGS = ['CS & Economics', 'Brown University', 'AI / ML', 'Div I Athlete']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen bg-bg-dark overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-dark/60" />

      {/* Radial red ambient glow — top left */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      {/* Subtle blue glow — bottom right */}
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-accent-blue/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col gap-8 px-6 md:px-12 lg:px-24 pt-14 pb-6 md:flex-row md:items-center max-w-[1280px] mx-auto w-full">

        {/* ── Left: Photo ── */}
        <motion.div
          className="relative w-full md:w-[44%] aspect-[3/4] max-w-[420px] mx-auto md:mx-0 shrink-0"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Outer glow */}
          <div className="absolute -inset-6 bg-primary/10 rounded-2xl blur-3xl" />

          {/* Corner accent marks */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary z-20 rounded-tl" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary z-20 rounded-tr" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary z-20 rounded-bl" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary z-20 rounded-br" />

          {/* Photo */}
          <div className="relative h-full w-full rounded-xl overflow-hidden bg-bg-card border border-primary/20">
            <Image
              src="/athletics/dabo.jpg"
              alt="N'Famara Dabo"
              fill
              sizes="(max-width: 768px) 100vw, 44vw"
              className="object-cover object-top grayscale-[20%]"
              priority
            />
            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/70 via-transparent to-transparent" />

            {/* Status chip */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <div className="flex items-center justify-between bg-bg-dark/85 backdrop-blur-md px-4 py-3 rounded-lg border border-border-dark">
                <div className="flex flex-col">
                  <span className="section-label text-slate-500">Status</span>
                  <span className="text-sm font-semibold text-slate-100 font-ibm">Available for Opportunities</span>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-green-400 font-mono font-bold">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  LIVE
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right: Content ── */}
        <div className="flex flex-col gap-5 flex-1 md:pl-8 lg:pl-12">

          {/* Brown badge */}
          <motion.div {...fadeUp(0.1)}>
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="section-label text-primary tracking-[0.18em]">
                Brown University · CS &amp; Economics
              </span>
            </div>
          </motion.div>

          {/* Massive name — Bebas Neue */}
          <motion.div {...fadeUp(0)} className="leading-none">
            <h1 className="font-bebas leading-[0.88] tracking-wide">
              <span className="block text-[clamp(64px,11vw,148px)] text-slate-100">
                N&apos;FAMARA
              </span>
              <span className="block text-[clamp(64px,11vw,148px)] text-primary glow-red">
                DABO
              </span>
            </h1>
          </motion.div>

          {/* Tagline pill row */}
          <motion.div className="flex flex-wrap gap-2" {...fadeUp(0.2)}>
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded border border-border-dark text-slate-400 bg-white/[0.02]"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Divider line */}
          <motion.div
            className="w-24 h-px bg-primary/60"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          />

          {/* Bio */}
          <motion.p
            className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed font-ibm font-light"
            {...fadeUp(0.35)}
          >
            Building intelligent systems, data models, and scalable technical solutions
            with the discipline of a high-performance athlete.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-wrap gap-3 pt-1" {...fadeUp(0.5)}>
            <Link
              href="#projects"
              className="group flex items-center gap-2.5 h-12 px-6 bg-primary text-white text-sm font-bold rounded-lg transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_24px_rgba(212,17,50,0.35)] hover:scale-[1.02] active:scale-95"
            >
              <FaRocket size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:rotate-12" />
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 h-12 px-6 border border-primary/30 text-slate-200 text-sm font-bold rounded-lg transition-all duration-300 hover:border-primary/60 hover:bg-primary/8 hover:scale-[1.02] active:scale-95"
            >
              <FaFileAlt size={13} />
              Resume
            </a>

            <Link
              href="#contact"
              className="flex items-center gap-2 h-12 px-5 text-slate-500 text-sm font-bold transition-all hover:text-slate-200"
            >
              <FaEnvelope size={13} />
              Contact
            </Link>
          </motion.div>
        </div>
      </div>

      <HeroStats />
    </section>
  )
}
