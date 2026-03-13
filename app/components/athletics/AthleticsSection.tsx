'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const TRAITS = [
  {
    label: '01',
    title: 'Teamwork',
    desc: 'Collaborating and performing under high pressure environments.',
  },
  {
    label: '02',
    title: 'Resilience',
    desc: 'Adapting fast to technical challenges and adversity.',
  },
  {
    label: '03',
    title: 'Precision',
    desc: 'Executing with the accuracy of a trained competitor.',
  },
  {
    label: '04',
    title: 'Discipline',
    desc: '20+ hours weekly — coding and competing at the highest level.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export default function AthleticsSection() {
  return (
    <section id="athletics" className="relative px-6 py-24 md:px-12 lg:px-24 bg-bg-dark overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto flex flex-col gap-14 md:flex-row md:items-start">

        {/* Left: Photo */}
        <motion.div
          className="w-full md:w-[42%] shrink-0"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-primary/8 rounded-2xl blur-2xl" />

            {/* Corner marks */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary z-20" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary z-20" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary z-20" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary z-20" />

            <div className="relative h-[480px] sm:h-[560px] w-full rounded-xl overflow-hidden bg-bg-card border border-primary/15">
              <Image
                src="/athletics/athlete.JPG"
                alt="N'Famara Dabo — Division I Athlete"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />

              {/* Info chip */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-bg-dark/85 backdrop-blur-md border border-border-dark rounded-lg px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="section-label text-slate-600 mb-0.5">Location</p>
                      <p className="text-sm font-semibold text-slate-200 font-ibm">Brown University · Providence, RI</p>
                    </div>
                    <div className="text-right">
                      <p className="section-label text-slate-600 mb-0.5">Division</p>
                      <p className="text-sm font-semibold text-primary font-mono">DIV I</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col gap-8 flex-1">

          <motion.div className="flex flex-col gap-4" {...fadeUp(0.1)}>
            <span className="section-label text-primary">Dual Discipline</span>

            <h2 className="font-bebas text-[clamp(44px,7vw,88px)] leading-[0.9] tracking-wide">
              HIGH-LEVEL <span className="text-primary">ATHLETICS</span>
              <br />
              MEETS TECHNICAL PRECISION
            </h2>

            <p className="text-slate-400 text-base leading-relaxed font-ibm font-light max-w-lg">
              Division I Student-Athlete at Brown University. The same resilience and
              leadership forged on the court drives precision in every line of code and
              every data model I build.
            </p>
          </motion.div>

          {/* Traits grid */}
          <motion.div className="grid grid-cols-2 gap-3" {...fadeUp(0.2)}>
            {TRAITS.map((t) => (
              <div
                key={t.title}
                className="group flex flex-col gap-2 p-4 rounded-xl border border-border-dark bg-bg-card hover:border-primary/30 hover:bg-primary/4 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-primary/60">{t.label}</span>
                </div>
                <h4 className="font-bold text-slate-100 font-ibm group-hover:text-primary transition-colors">{t.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-ibm font-light">{t.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div className="flex gap-3 pt-2" {...fadeUp(0.35)}>
            <Link
              href="#projects"
              className="flex-1 md:flex-none md:min-w-[180px] bg-primary text-white h-11 rounded-lg font-bold text-sm font-ibm flex items-center justify-center gap-2 hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(212,17,50,0.3)] transition-all duration-300 hover:scale-[1.02]"
            >
              Technical Work <FaArrowRight size={12} />
            </Link>
            <a
              href="https://www.espn.com/mens-college-basketball/player/_/id/5175857/nfamara-dabo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none md:min-w-[160px] border border-border-dark text-slate-400 h-11 rounded-lg font-bold text-sm font-ibm flex items-center justify-center gap-2 hover:border-primary/40 hover:text-slate-200 transition-all duration-300"
            >
              Athletic Bio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
