'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/lib/projects'
import type { Project, ProjectCategory } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

type Filter = 'All' | ProjectCategory

const FILTERS: Filter[] = ['All', 'AI/ML', 'Data Science', 'Web Dev', 'Sports Tech', 'Networking']

export default function ProjectsGrid() {
  const [active, setActive] = useState<Filter>('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <section id="projects" className="relative px-6 py-24 md:px-12 lg:px-24 bg-bg-dark overflow-hidden">

        {/* Subtle background */}
        <div className="absolute inset-0 line-grid opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="relative max-w-[1280px] mx-auto">

          {/* Section header */}
          <motion.div
            className="flex flex-col gap-5 mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-primary/8 px-3 py-1.5 border border-primary/20 w-fit">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                </span>
                <span className="section-label text-primary">Student-Athlete Engineering</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-bebas text-[clamp(48px,8vw,96px)] leading-none tracking-wide text-slate-100">
                Technical <span className="text-primary">Projects</span>
              </h2>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed font-ibm font-light md:text-right">
                High-performance AI, Data Science, and Engineering solutions developed at Brown University.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-primary/40 via-border-dark to-transparent" />
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`h-8 px-4 rounded-md text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 ${
                  active === f
                    ? 'bg-primary text-white shadow-[0_0_12px_rgba(212,17,50,0.3)]'
                    : 'bg-bg-card border border-border-dark text-slate-500 hover:text-slate-300 hover:border-slate-600'
                }`}
              >
                {f === 'All' ? 'All' : f}
              </button>
            ))}
          </motion.div>

          {/* Cards grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={i}
                  onClick={() => setSelected(project)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
