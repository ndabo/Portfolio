'use client'

import { motion } from 'framer-motion'
import { FaNetworkWired, FaGithub } from 'react-icons/fa'

const NETWORKS = [
  {
    name: 'Campus Network Design',
    type: 'Education',
    topics: ['VLAN', 'OSPF', 'DHCP'],
  },
  {
    name: 'Small Office / Home Office',
    type: 'SOHO',
    topics: ['NAT', 'DHCP', 'Wireless'],
  },
  {
    name: 'VoIP Network',
    type: 'Telecommunications',
    topics: ['VoIP', 'Call Manager', 'QoS'],
  },
  {
    name: 'Bank Network Design',
    type: 'Finance',
    topics: ['ACL', 'VLAN', 'Firewall'],
  },
  {
    name: 'Company Network',
    type: 'Enterprise',
    topics: ['OSPF', 'HSRP', 'VLAN'],
  },
  {
    name: 'Hospital Network',
    type: 'Healthcare',
    topics: ['VLAN', 'DHCP/DNS', 'Security'],
  },
  {
    name: 'Hotel Network System',
    type: 'Hospitality',
    topics: ['Wireless', 'VLAN', 'NAT'],
  },
  {
    name: 'Simple Network & Subnetting',
    type: 'Fundamentals',
    topics: ['VLSM', 'Subnetting', 'TCP/IP'],
  },
]

const SKILLS = [
  'VLSM Subnetting', 'OSPF / RIP Routing', 'VLAN Segmentation',
  'DHCP & DNS', 'VoIP Config', 'ACL Firewalling', 'NAT / PAT', 'QoS Policies',
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay },
})

export default function NetworkingSection() {
  return (
    <section
      id="networking"
      className="px-6 py-20 md:px-12 lg:px-24 bg-bg-dark border-t border-primary/10"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.div className="flex flex-col gap-4" {...fadeUp(0)}>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-blue/10 px-3 py-1 border border-accent-blue/20 w-fit">
            <FaNetworkWired className="text-accent-blue" size={12} />
            <span className="section-label text-accent-blue">Network Engineering</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Cisco Packet Tracer{' '}
            <span className="text-primary">Lab Portfolio</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            8 fully simulated network topologies covering real-world enterprise, healthcare,
            hospitality, and education environments — designed, configured, and verified end-to-end.
          </p>
        </motion.div>

        {/* Network design cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {NETWORKS.map((n, i) => (
            <motion.div
              key={n.name}
              className="group flex flex-col gap-3 p-5 rounded-xl bg-bg-card border border-border-dark hover:border-accent-blue/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="size-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-bg-dark transition-colors">
                <FaNetworkWired size={16} />
              </div>

              <div>
                <p className="font-bold text-slate-100 text-sm leading-tight">{n.name}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">
                  {n.type}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 mt-auto">
                {n.topics.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold text-accent-blue border border-accent-blue/20 bg-accent-blue/5 px-2 py-0.5 rounded uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills + GitHub CTA */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-start"
          {...fadeUp(0.2)}
        >
          {/* Skills */}
          <div className="flex-1">
            <p className="section-label text-slate-500 mb-4">Core Networking Skills</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="text-xs font-bold px-3 py-1.5 rounded-full bg-bg-card border border-border-dark text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="flex flex-col gap-3 shrink-0">
            <p className="section-label text-slate-500">View All Designs</p>
            <a
              href="https://github.com/ndabo/Network-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent-blue/10 hover:bg-accent-blue text-accent-blue hover:text-bg-dark border border-accent-blue/30 px-6 py-3 rounded-lg font-bold transition-all"
            >
              <FaGithub size={16} /> GitHub Repository
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
