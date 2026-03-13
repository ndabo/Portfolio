'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaNetworkWired } from 'react-icons/fa'
import type { Project } from '@/lib/projects'

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 48 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full sm:max-w-2xl max-h-[92vh] min-h-0 overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-bg-card border border-border-dark shadow-[0_0_0_1px_rgba(212,17,50,0.15),0_32px_80px_rgba(0,0,0,0.6)]">

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 size-8 flex items-center justify-center rounded-full bg-bg-dark border border-border-dark text-slate-500 hover:text-white hover:border-primary/60 transition-all"
              >
                <FaTimes size={12} />
              </button>

              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-bg-dark">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-primary/20 via-bg-dark to-bg-dark" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5 p-6 sm:p-8">

                {/* Title */}
                <div className="flex flex-col gap-1">
                  <span className="section-label text-primary">{project.category}</span>
                  <h2 className="font-bebas text-4xl leading-none tracking-wide text-slate-100">
                    {project.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-sm font-ibm font-light">{project.description}</p>

                {/* Approach */}
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-bg-dark border border-border-dark">
                  <span className="section-label text-slate-600">Approach</span>
                  <p className="text-slate-300 text-sm leading-relaxed font-ibm font-light">{project.approach}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1 p-4 rounded-xl bg-bg-dark border border-border-dark">
                      <span className="section-label text-slate-600">{m.label}</span>
                      <span className="font-mono text-3xl font-black text-primary leading-none">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Sub-items */}
                {project.subItems && project.subItems.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <span className="section-label text-slate-600">Included Designs</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.subItems.map((item) => (
                        <div
                          key={item.name}
                          className="flex flex-col gap-2 p-3 rounded-lg bg-bg-dark border border-border-dark hover:border-accent-blue/20 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <FaNetworkWired className="text-accent-blue shrink-0" size={11} />
                            <span className="font-bold text-slate-200 text-xs font-ibm">{item.name}</span>
                          </div>
                          <span className="section-label text-slate-600">{item.type}</span>
                          <div className="flex flex-wrap gap-1">
                            {item.topics.map((t) => (
                              <span
                                key={t}
                                className="text-[9px] font-bold text-accent-blue border border-accent-blue/15 bg-accent-blue/5 px-2 py-0.5 rounded font-mono uppercase tracking-wider"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3 pt-2 border-t border-border-dark">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm font-ibm hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(212,17,50,0.3)] transition-all"
                    >
                      <FaGithub size={13} /> View on GitHub
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm bg-bg-dark border border-border-dark text-slate-600">
                      Private Repository
                    </span>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-primary/40 text-primary px-5 py-2.5 rounded-lg font-bold text-sm font-ibm hover:bg-primary/8 transition-colors"
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>
                  )}
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
