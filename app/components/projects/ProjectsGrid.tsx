'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
      <section id="projects" className="px-6 py-20 md:px-12 lg:px-24 bg-bg-dark">
        <div className="max-w-[1200px] mx-auto">

          {/* Section header */}
          <motion.div
            className="flex flex-col gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 border border-primary/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="section-label text-primary">Student-Athlete Engineering</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight lg:max-w-3xl">
              Technical Projects Gallery
            </h2>

            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Specializing in high-performance AI, Data Science, and Software Engineering solutions
              developed at Brown University. Bridging the gap between athletic discipline and technical
              precision.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            className="flex flex-wrap gap-2 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`flex h-9 items-center justify-center rounded-lg px-5 text-sm font-bold transition-all ${
                  active === f
                    ? 'bg-primary text-white'
                    : 'bg-border-dark text-slate-300 hover:bg-border-dark/60'
                }`}
              >
                {f === 'All' ? 'All Projects' : f}
              </button>
            ))}
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>

        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
