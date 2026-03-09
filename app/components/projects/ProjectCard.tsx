'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import type { Project, ProjectCategory } from '@/lib/projects'

interface CategoryStyle {
  hoverBorder: string
  titleHover:  string
  metricColor: string
  badge:       string
  badgeLabel:  string
  gradient:    string
}

const CATEGORY_STYLE: Record<ProjectCategory, CategoryStyle> = {
  'AI/ML': {
    hoverBorder: 'hover:border-accent-blue/50',
    titleHover:  'group-hover:text-accent-blue',
    metricColor: 'text-accent-blue',
    badge:       'bg-accent-blue/20 border-accent-blue/30 text-accent-blue',
    badgeLabel:  'ACTIVE MODEL',
    gradient:    'from-blue-950 to-bg-dark',
  },
  'Data Science': {
    hoverBorder: 'hover:border-primary/50',
    titleHover:  'group-hover:text-primary',
    metricColor: 'text-primary',
    badge:       'bg-primary/20 border-primary/30 text-primary',
    badgeLabel:  'LIVE DATA',
    gradient:    'from-red-950 to-bg-dark',
  },
  'Sports Tech': {
    hoverBorder: 'hover:border-primary/50',
    titleHover:  'group-hover:text-primary',
    metricColor: 'text-primary',
    badge:       'bg-primary/20 border-primary/30 text-primary',
    badgeLabel:  'REAL-TIME',
    gradient:    'from-rose-950 to-bg-dark',
  },
  'Networking': {
    hoverBorder: 'hover:border-accent-blue/50',
    titleHover:  'group-hover:text-accent-blue',
    metricColor: 'text-accent-blue',
    badge:       'bg-accent-blue/20 border-accent-blue/30 text-accent-blue',
    badgeLabel:  'PRODUCTION',
    gradient:    'from-cyan-950 to-bg-dark',
  },
  'Web Dev': {
    hoverBorder: 'hover:border-accent-blue/50',
    titleHover:  'group-hover:text-accent-blue',
    metricColor: 'text-accent-blue',
    badge:       'bg-accent-blue/20 border-accent-blue/30 text-accent-blue',
    badgeLabel:  'DEPLOYED',
    gradient:    'from-indigo-950 to-bg-dark',
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
    <motion.div
      onClick={onClick}
      className={`group relative flex flex-col gap-4 rounded-xl bg-bg-card border border-border-dark p-5 ${s.hoverBorder} transition-all duration-300 ${onClick ? 'cursor-pointer' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      {/* Image / gradient placeholder */}
      <div className="relative overflow-hidden rounded-lg aspect-video">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent z-10" />
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            className={`h-full w-full bg-gradient-to-br ${s.gradient} transition-transform duration-500 group-hover:scale-110`}
          />
        )}
        {/* Category status badge */}
        <div className="absolute top-3 right-3 z-20">
          <span className={`text-[10px] font-bold px-2 py-1 rounded border backdrop-blur-md ${s.badge}`}>
            {s.badgeLabel}
          </span>
        </div>
      </div>

      {/* Title + description */}
      <div className="flex flex-col gap-2">
        <h3 className={`text-xl font-bold transition-colors ${s.titleHover}`}>
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-badge">{tech.toUpperCase()}</span>
        ))}
      </div>

      {/* Performance metrics */}
      <div className="mt-auto grid grid-cols-2 gap-4 border-t border-border-dark pt-4">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold">
            {metric0.label}
          </span>
          <span className={`text-xl font-black tracking-tighter ${s.metricColor}`}>
            {metric0.value}
          </span>
        </div>
        <div className="flex flex-col border-l border-border-dark pl-4">
          <span className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold">
            {metric1.label}
          </span>
          <span className="text-xl font-black tracking-tighter text-slate-100">
            {metric1.value}
          </span>
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
          >
            <FaGithub size={13} /> GITHUB
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
          >
            <FaExternalLinkAlt size={11} /> LIVE DEMO
          </a>
        )}
      </div>
    </motion.div>
  )
}
