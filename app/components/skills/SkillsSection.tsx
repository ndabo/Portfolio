'use client'

import { motion } from 'framer-motion'
import { FaBrain, FaNetworkWired, FaChartLine } from 'react-icons/fa'

const SKILLS = [
  {
    icon: <FaBrain size={22} />,
    title: 'AI & Machine Learning',
    items: ['PyTorch & TensorFlow', 'Computer Vision', 'Natural Language Processing', 'LLM Fine-tuning'],
  },
  {
    icon: <FaNetworkWired size={22} />,
    title: 'Systems & Tools',
    items: ['Docker & Kubernetes', 'TCP/IP Networking', 'AWS Cloud Architecture', 'PostgreSQL / Redis'],
  },
  {
    icon: <FaChartLine size={22} />,
    title: 'Econ & Finance',
    items: ['Quantitative Analysis', 'Algorithmic Trading', 'Econometric Modeling', 'Bloomberg Terminal'],
  },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="px-6 py-16 md:px-12 lg:px-24 bg-bg-dark border-t border-primary/10"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.title}
            className="group bg-slate-900/40 p-8 rounded-xl border border-primary/10 hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Icon */}
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              {s.icon}
            </div>

            <h3 className="text-xl font-bold mb-4">{s.title}</h3>

            <ul className="space-y-3">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-400">
                  <span className="size-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
