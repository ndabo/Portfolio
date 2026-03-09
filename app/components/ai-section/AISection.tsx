'use client'

import { motion } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from 'recharts'
import { FaBrain, FaGithub } from 'react-icons/fa'
import { projects } from '@/lib/projects'

const CHART_DATA = [
  { name: 'Autograph Auth',  value: 94.2, color: '#d41132' },
  { name: 'MVP Prediction',  value: 91.5, color: '#d41132' },
  { name: 'FIFA Ranking',    value: 68.0, color: '#d41132' },
  { name: 'Inference FW',   value: 100,  color: '#00d4ff' },
]

const SUMMARY_STATS = [
  { label: 'Models Built',  value: '6+' },
  { label: 'Avg Accuracy',  value: '88%' },
  { label: 'Frameworks',    value: '5' },
  { label: 'Featured Live', value: '2' },
]

const AI_PROJECTS = projects.filter(
  (p) => p.category === 'AI/ML' || p.category === 'Data Science' || p.category === 'Sports Tech',
)

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function AISection() {
  return (
    <section id="ai" className="px-6 py-20 md:px-12 lg:px-24 bg-bg-card border-t border-primary/10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.div className="flex flex-col gap-4" {...fadeUp(0)}>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-blue/10 px-3 py-1 border border-accent-blue/20 w-fit">
            <FaBrain className="text-accent-blue" size={12} />
            <span className="section-label text-accent-blue">AI & Machine Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Model Performance{' '}
            <span className="text-primary">Dashboard</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Trained and evaluated across classification, detection, and regression tasks.
            Every model measured like a game — by the numbers.
          </p>
        </motion.div>

        {/* Chart + summary stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Bar chart */}
          <motion.div
            className="lg:col-span-2 bg-bg-dark rounded-xl border border-border-dark p-6"
            {...fadeUp(0.1)}
          >
            <p className="section-label text-slate-500 mb-6">
              Model Accuracy / Performance (%)
            </p>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={CHART_DATA} barSize={36} margin={{ top: 0, right: 8, left: -16, bottom: 0 }}>
                <XAxis
                  dataKey="name"
                  tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={32}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  contentStyle={{
                    background: '#1d0e11',
                    border: '1px solid #3d2226',
                    borderRadius: 8,
                    fontSize: 12,
                    color: '#f1f5f9',
                  }}
                  formatter={(v: number) => [`${v}%`, 'Score']}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {CHART_DATA.map((entry, i) => (
                    <Cell key={i} fill={entry.color} opacity={0.9} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Summary stats */}
          <motion.div className="grid grid-cols-2 gap-4 content-start" {...fadeUp(0.2)}>
            {SUMMARY_STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-1 p-5 bg-bg-dark rounded-xl border border-border-dark"
              >
                <span className="section-label text-slate-500">{s.label}</span>
                <span className="text-3xl font-black text-primary">{s.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Featured models list */}
        <motion.div className="flex flex-col gap-3" {...fadeUp(0.25)}>
          <p className="section-label text-slate-500 mb-1">Featured Models</p>
          {AI_PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              className="flex items-center justify-between gap-4 p-4 rounded-lg bg-bg-dark border border-border-dark hover:border-primary/40 transition-colors group"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-bold text-slate-100 group-hover:text-primary transition-colors truncate">
                  {p.title}
                </span>
                <span className="text-xs text-slate-500 truncate hidden sm:block">
                  {p.description.slice(0, 90)}…
                </span>
              </div>

              <div className="flex items-center gap-6 shrink-0">
                <div className="hidden md:flex flex-col items-end">
                  <span className="section-label text-slate-500">{p.metrics[0].label}</span>
                  <span className="font-black text-accent-blue">{p.metrics[0].value}</span>
                </div>
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-primary transition-colors"
                    aria-label={`GitHub: ${p.title}`}
                  >
                    <FaGithub size={18} />
                  </a>
                ) : (
                  <span className="text-[10px] font-bold px-2 py-1 rounded border border-slate-700 text-slate-600 uppercase tracking-wider">
                    Private
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
