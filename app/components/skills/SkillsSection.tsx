'use client'

import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'SQL', 'Java', 'R'],
    color: 'text-accent-blue border-accent-blue/20 bg-accent-blue/5',
  },
  {
    label: 'AI & ML',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'YOLOv8', 'SHAP', 'LLM Fine-tuning'],
    color: 'text-primary border-primary/20 bg-primary/5',
  },
  {
    label: 'Data',
    items: ['Pandas', 'NumPy', 'Plotly', 'Seaborn', 'Matplotlib', 'FastAPI'],
    color: 'text-success border-success/20 bg-success/5',
  },
  {
    label: 'Systems & Cloud',
    items: ['Docker', 'AWS', 'PostgreSQL', 'Redis', 'Cisco Packet Tracer', 'TCP/IP', 'OSPF', 'VLAN'],
    color: 'text-accent-blue border-accent-blue/20 bg-accent-blue/5',
  },
  {
    label: 'Finance & Econ',
    items: ['Econometric Modeling', 'Bloomberg Terminal', 'Quantitative Analysis', 'Statsmodels'],
    color: 'text-primary border-primary/20 bg-primary/5',
  },
  {
    label: 'Tools',
    items: ['Git', 'Jupyter', 'VS Code', 'Next.js', 'Vercel', 'Framer Motion'],
    color: 'text-slate-400 border-slate-600/20 bg-slate-500/5',
  },
]

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
            Skills & <span className="text-primary">Expertise</span>
          </h2>
        </motion.div>

        {/* Skill group grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              className="group flex flex-col gap-4 p-6 rounded-xl border border-border-dark bg-bg-card hover:border-primary/25 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label text-slate-500 group-hover:text-slate-400 transition-colors">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`inline-flex items-center px-2.5 py-1 rounded-md border text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 ${group.color}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
