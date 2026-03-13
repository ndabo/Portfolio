'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import type { Project, ProjectCategory } from '@/lib/projects'

interface CategoryStyle {
  hoverBorder: string
  titleHover:  string
  metricColor: string
  badge:       string
  badgeLabel:  string
  gradient:    string
  glow:        string
}

const CATEGORY_STYLE: Record<ProjectCategory, CategoryStyle> = {
  'AI/ML': {
    hoverBorder: 'hover:border-accent-blue/40',
    titleHover:  'group-hover:text-accent-blue',
    metricColor: 'text-accent-blue',
    badge:       'bg-accent-blue/15 border-accent-blue/25 text-accent-blue',
    badgeLabel:  'ACTIVE MODEL',
    gradient:    'from-blue-950/80 via-cyan-950/40 to-bg-dark',
    glow:        'group-hover:shadow-[0_0_0_1px_rgba(0,212,255,0.25),0_12px_40px_rgba(0,212,255,0.08)]',
  },
  'Data Science': {
    hoverBorder: 'hover:border-primary/40',
    titleHover:  'group-hover:text-primary',
    metricColor: 'text-primary',
    badge:       'bg-primary/15 border-primary/25 text-primary',
    badgeLabel:  'LIVE DATA',
    gradient:    'from-rose-950/80 via-red-950/40 to-bg-dark',
    glow:        'group-hover:shadow-[0_0_0_1px_rgba(212,17,50,0.25),0_12px_40px_rgba(212,17,50,0.08)]',
  },
  'Sports Tech': {
    hoverBorder: 'hover:border-primary/40',
    titleHover:  'group-hover:text-primary',
    metricColor: 'text-primary',
    badge:       'bg-primary/15 border-primary/25 text-primary',
    badgeLabel:  'REAL-TIME',
    gradient:    'from-rose-950/80 via-red-950/40 to-bg-dark',
    glow:        'group-hover:shadow-[0_0_0_1px_rgba(212,17,50,0.25),0_12px_40px_rgba(212,17,50,0.08)]',
  },
  'Networking': {
    hoverBorder: 'hover:border-accent-blue/40',
    titleHover:  'group-hover:text-accent-blue',
    metricColor: 'text-accent-blue',
    badge:       'bg-accent-blue/15 border-accent-blue/25 text-accent-blue',
    badgeLabel:  'PRODUCTION',
    gradient:    'from-cyan-950/80 via-blue-950/40 to-bg-dark',
    glow:        'group-hover:shadow-[0_0_0_1px_rgba(0,212,255,0.25),0_12px_40px_rgba(0,212,255,0.08)]',
  },
  'Web Dev': {
    hoverBorder: 'hover:border-accent-blue/40',
    titleHover:  'group-hover:text-accent-blue',
    metricColor: 'text-accent-blue',
    badge:       'bg-accent-blue/15 border-accent-blue/25 text-accent-blue',
    badgeLabel:  'DEPLOYED',
    gradient:    'from-indigo-950/80 via-blue-950/40 to-bg-dark',
    glow:        'group-hover:shadow-[0_0_0_1px_rgba(0,212,255,0.25),0_12px_40px_rgba(0,212,255,0.08)]',
  },
}

export default function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project
  index: number
  onClick?: () => void
}) {
  const s = CATEGORY_STYLE[project.category]
  const [metric0, metric1] = project.metrics

  return (
    <motion.article
      onClick={onClick}
      className={`group relative flex flex-col rounded-xl bg-bg-card border border-border-dark ${s.hoverBorder} ${s.glow} transition-all duration-400 ${onClick ? 'cursor-pointer' : ''}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image / gradient */}
      <div className="relative overflow-hidden rounded-t-xl aspect-video">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/90 via-bg-card/20 to-transparent z-10" />
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className={`h-full w-full bg-gradient-to-br ${s.gradient} transition-transform duration-700 group-hover:scale-105`}
          />
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className={`section-label px-2.5 py-1 rounded-md border backdrop-blur-md ${s.badge}`}>
            {s.badgeLabel}
          </span>
        </div>

        {/* Arrow reveal on hover */}
        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-7 h-7 rounded-full bg-bg-dark/80 border border-border-dark flex items-center justify-center">
            <FaArrowRight size={10} className="text-slate-300" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">

        {/* Title + description */}
        <div className="flex flex-col gap-1.5">
          <h3 className={`text-lg font-bold leading-snug transition-colors duration-200 ${s.titleHover}`}>
            {project.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-ibm font-light">
            {project.description}
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        {/* Metrics — bottom */}
        <div className="mt-auto pt-4 border-t border-border-dark grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="section-label text-slate-600">{metric0.label}</span>
            <span className={`font-mono text-2xl font-black leading-none tracking-tight ${s.metricColor}`}>
              {metric0.value}
            </span>
          </div>
          <div className="flex flex-col gap-0.5 border-l border-border-dark pl-4">
            <span className="section-label text-slate-600">{metric1.label}</span>
            <span className="font-mono text-2xl font-black leading-none tracking-tight text-slate-300">
              {metric1.value}
            </span>
          </div>
        </div>

        {/* Links */}
        {(project.github || project.demo) && (
          <div className="flex items-center gap-4 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-bold font-mono text-slate-500 hover:text-primary transition-colors"
              >
                <FaGithub size={12} /> GITHUB
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-bold font-mono text-slate-500 hover:text-primary transition-colors"
              >
                <FaExternalLinkAlt size={10} /> DEMO
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}
