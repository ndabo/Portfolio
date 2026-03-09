import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

const LINKS = [
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nfamara-dabo-810888289/',
  },
  {
    icon: <FaInstagram size={20} />,
    label: 'Instagram',
    href: 'https://www.instagram.com/dabs.11/',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    href: 'https://github.com/ndabo',
  },
  {
    icon: <FaEnvelope size={20} />,
    label: 'ndabo2004@gmail.com',
    href: 'mailto:ndabo2004@gmail.com',
  },
]

export default function ContactSection() {
  return (
    <footer id="contact" className="border-t border-primary/20 bg-bg-dark px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8 text-center">

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-black tracking-tight">
            N&apos;Famara <span className="text-primary">Dabo</span>
          </h2>
          <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">
            Brown University · CS &amp; Economics · Division I Athletics
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-medium"
            >
              {l.icon}
              {l.label}
            </a>
          ))}
        </div>

        <p className="text-slate-700 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} N&apos;Famara Dabo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
