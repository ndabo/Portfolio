import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowRight } from 'react-icons/fa'

const LINKS = [
  {
    icon: <FaLinkedin size={18} />,
    label: 'LinkedIn',
    sub: 'Connect professionally',
    href: 'https://www.linkedin.com/in/nfamara-dabo-810888289/',
  },
  {
    icon: <FaGithub size={18} />,
    label: 'GitHub',
    sub: 'View all projects',
    href: 'https://github.com/ndabo',
  },
  {
    icon: <FaEnvelope size={18} />,
    label: 'Email',
    sub: 'ndabo2004@gmail.com',
    href: 'mailto:ndabo2004@gmail.com',
  },
  {
    icon: <FaInstagram size={18} />,
    label: 'Instagram',
    sub: '@dabs.11',
    href: 'https://www.instagram.com/dabs.11/',
  },
]

export default function ContactSection() {
  return (
    <footer id="contact" className="relative bg-bg-dark overflow-hidden">

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-12">

        {/* Big CTA */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <span className="section-label text-primary">Get in Touch</span>

          <h2 className="font-bebas text-[clamp(56px,12vw,160px)] leading-none tracking-wide text-slate-100">
            LET&apos;S <span className="text-primary">CONNECT</span>
          </h2>

          <p className="text-slate-500 text-base font-ibm font-light max-w-md leading-relaxed">
            Open to internships, research collaborations, and interesting conversations about AI, data, and sports tech.
          </p>

          <a
            href="mailto:ndabo2004@gmail.com"
            className="group flex items-center gap-3 h-12 px-7 bg-primary text-white text-sm font-bold font-ibm rounded-lg transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_32px_rgba(212,17,50,0.4)] hover:scale-[1.02] active:scale-95"
          >
            Send me an email
            <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-dark mb-12" />

        {/* Link cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 p-4 rounded-xl border border-border-dark bg-bg-card hover:border-primary/30 hover:bg-primary/4 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-500 group-hover:text-primary transition-colors duration-200">
                  {l.icon}
                </span>
                <FaArrowRight
                  size={10}
                  className="text-slate-700 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-200 font-ibm group-hover:text-primary transition-colors">{l.label}</p>
                <p className="text-xs text-slate-600 font-mono mt-0.5 truncate">{l.sub}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-dark pt-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
              <span className="font-bebas text-sm text-white">ND</span>
            </div>
            <span className="font-ibm text-sm font-semibold text-slate-400">N&apos;Famara Dabo</span>
          </div>
          <p className="section-label text-slate-700">
            Brown University · CS &amp; Economics · Division I Athletics
          </p>
          <p className="section-label text-slate-800">
            © {new Date().getFullYear()} N&apos;Famara Dabo
          </p>
        </div>
      </div>
    </footer>
  )
}
