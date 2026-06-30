'use client'

import { motion } from 'framer-motion'
import {
  FaCode,
  FaBrain,
  FaChartBar,
  FaServer,
  FaChartLine,
  FaToolbox,
} from 'react-icons/fa'
import type { IconType } from 'react-icons'

type Accent = 'primary' | 'data' | 'success' | 'slate'

interface SkillGroup {
  label: string
  blurb: string
  icon: IconType
  accent: Accent
  items: string[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Languages',
    blurb: 'Production code across the stack',
    icon: FaCode,
    accent: 'data',
    items: ['Python', 'TypeScript', 'SQL', 'Java', 'R'],
  },
  {
    label: 'AI & ML',
    blurb: 'Modeling, training & explainability',
    icon: FaBrain,
    accent: 'primary',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'YOLOv8', 'SHAP', 'LLM Fine-tuning'],
  },
  {
    label: 'Data',
    blurb: 'Wrangling, analysis & visualization',
    icon: FaChartBar,
    accent: 'success',
    items: ['Pandas', 'NumPy', 'Plotly', 'Seaborn', 'Matplotlib', 'FastAPI'],
  },
  {
    label: 'Systems & Cloud',
    blurb: 'Infrastructure & networking',
    icon: FaServer,
    accent: 'data',
    items: ['Docker', 'AWS', 'PostgreSQL', 'Redis', 'Cisco Packet Tracer', 'TCP/IP', 'OSPF', 'VLAN'],
  },
  {
    label: 'Finance & Econ',
    blurb: 'Quantitative & econometric analysis',
    icon: FaChartLine,
    accent: 'primary',
    items: ['Econometric Modeling', 'Bloomberg Terminal', 'Quantitative Analysis', 'Statsmodels'],
  },
  {
    label: 'Tools',
    blurb: 'Build, ship & iterate',
    icon: FaToolbox,
    accent: 'slate',
    items: ['Git', 'Jupyter', 'VS Code', 'Next.js', 'Vercel', 'Framer Motion'],
  },
]

const ACCENT: Record<Accent, { text: string; chip: string; border: string; bar: string }> = {
  primary: {
    text: 'text-primary',
    chip: 'text-primary border-primary/20 bg-primary/5 group-hover:border-primary/40',
    border: 'group-hover:border-primary/30',
    bar: 'bg-primary',
  },
  data: {
    text: 'text-accent-blue',
    chip: 'text-accent-blue border-accent-blue/20 bg-accent-blue/5 group-hover:border-accent-blue/40',
    border: 'group-hover:border-accent-blue/30',
    bar: 'bg-accent-blue',
  },
  success: {
    text: 'text-success',
    chip: 'text-success border-success/20 bg-success/5 group-hover:border-success/40',
    border: 'group-hover:border-success/30',
    bar: 'bg-success',
  },
  slate: {
    text: 'text-slate-400',
    chip: 'text-slate-400 border-slate-600/20 bg-slate-500/5 group-hover:border-slate-500/40',
    border: 'group-hover:border-border-strong',
    bar: 'bg-slate-500',
  },
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative px-6 py-20 md:px-12 lg:px-24 bg-bg-dark border-t border-border-dark overflow-hidden"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-border-dark to-transparent" />

      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label text-primary">Technical Stack</span>
          <h2 className="font-bebas text-[clamp(40px,6vw,72px)] leading-none tracking-wide text-slate-100">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md leading-relaxed font-ibm font-light">
            A broad, hands-on toolkit spanning AI, data, systems, and finance — built across coursework, research, and real projects.
          </p>
        </motion.div>

        {/* Skill group grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => {
            const a = ACCENT[group.accent]
            const Icon = group.icon
            return (
              <motion.div
                key={group.label}
                className={`group relative flex flex-col gap-4 p-6 rounded-xl border border-border-dark bg-bg-card ${a.border} hover:bg-bg-card-hover transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Accent top bar — lights up on hover */}
                <span className={`absolute top-0 left-6 h-px w-10 ${a.bar} opacity-40 group-hover:w-16 group-hover:opacity-90 transition-all duration-300`} />

                {/* Header row: icon + label + count */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`flex size-9 items-center justify-center rounded-lg border border-border-dark bg-bg-dark ${a.text}`}>
                      <Icon size={15} />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-100 font-ibm leading-tight">{group.label}</span>
                      <span className="text-[11px] text-slate-600 font-ibm font-light leading-tight">{group.blurb}</span>
                    </div>
                  </div>
                  <span className={`section-label ${a.text} tabular-nums`}>
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`inline-flex items-center px-2.5 py-1 rounded-md border text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 ${a.chip}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
