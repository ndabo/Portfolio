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
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll while open
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
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-full sm:max-w-2xl max-h-[92vh] min-h-0 overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-bg-card border border-border-dark shadow-2xl">

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 size-8 flex items-center justify-center rounded-full bg-bg-dark border border-border-dark text-slate-400 hover:text-white hover:border-primary transition-colors"
              >
                <FaTimes size={13} />
              </button>

              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl sm:rounded-t-2xl bg-bg-dark">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-primary/20 to-bg-dark" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6 p-6 sm:p-8">

                {/* Title + category */}
                <div className="flex flex-col gap-1">
                  <span className="section-label text-primary">{project.category}</span>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                    {project.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">{project.description}</p>

                {/* Approach */}
                <div className="flex flex-col gap-2 p-4 rounded-lg bg-bg-dark border border-border-dark">
                  <p className="section-label text-slate-500">Approach</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.approach}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1 p-4 rounded-lg bg-bg-dark border border-border-dark">
                      <span className="section-label text-slate-500">{m.label}</span>
                      <span className="text-2xl font-black text-primary">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-badge">{t.toUpperCase()}</span>
                  ))}
                </div>

                {/* Sub-items (e.g. Cisco network designs) */}
                {project.subItems && project.subItems.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <p className="section-label text-slate-500">Included Designs</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.subItems.map((item) => (
                        <div
                          key={item.name}
                          className="flex flex-col gap-2 p-4 rounded-lg bg-bg-dark border border-border-dark"
                        >
                          <div className="flex items-center gap-2">
                            <FaNetworkWired className="text-accent-blue shrink-0" size={13} />
                            <span className="font-bold text-slate-100 text-sm">{item.name}</span>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            {item.type}
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {item.topics.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] font-bold text-accent-blue border border-accent-blue/20 bg-accent-blue/5 px-2 py-0.5 rounded uppercase"
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
                <div className="flex gap-4 pt-2 border-t border-border-dark">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold hover:bg-primary-hover transition-colors"
                    >
                      <FaGithub size={14} /> View on GitHub
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold bg-bg-dark border border-border-dark text-slate-500 text-sm">
                      Private Repository
                    </span>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-primary/50 text-primary px-5 py-2.5 rounded-lg font-bold hover:bg-primary/5 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
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
