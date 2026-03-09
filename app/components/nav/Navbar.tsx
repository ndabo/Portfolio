'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTerminal, FaBars, FaTimes } from 'react-icons/fa'

interface NavLink {
  label: string
  href: string
  external?: boolean
}

const NAV_LINKS: NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#athletics' },
  { label: 'Resume',   href: '/resume.pdf', external: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-bg-dark/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 max-w-[1200px] mx-auto">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-slate-100 hover:text-primary transition-colors"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg text-white shrink-0">
            <FaTerminal size={16} />
          </div>
          <span className="text-xl font-bold leading-tight tracking-tight">
            N&apos;Famara Dabo
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:flex min-w-[120px] items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold transition-all hover:bg-primary-hover hover:scale-105 active:scale-95"
          >
            Get in touch
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-300 hover:text-primary transition-colors p-1"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — animated */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-primary/20 bg-bg-dark/95"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((l) =>
                l.external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-slate-300 hover:text-primary transition-colors py-1"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-slate-300 hover:text-primary transition-colors py-1"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold"
              >
                Get in touch
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
