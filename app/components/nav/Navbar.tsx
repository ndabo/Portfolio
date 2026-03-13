'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-border-dark bg-bg-dark/90 backdrop-blur-xl shadow-[0_1px_0_rgba(212,17,50,0.1)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 max-w-[1280px] mx-auto">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-slate-100 hover:text-primary transition-colors duration-300"
        >
          {/* ND monogram */}
          <div className="relative flex items-center justify-center w-9 h-9 bg-primary rounded-lg overflow-hidden shrink-0">
            <span className="font-bebas text-lg leading-none text-white tracking-wide">ND</span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
          </div>
          <span className="font-ibm text-base font-semibold leading-tight tracking-tight hidden sm:block">
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
                className="link-underline text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors duration-200 font-ibm"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className="link-underline text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors duration-200 font-ibm"
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
            className="hidden md:flex h-9 items-center justify-center rounded-lg px-5 bg-primary text-white text-sm font-bold font-ibm transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(212,17,50,0.3)] hover:scale-105 active:scale-95"
          >
            Get in touch
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-400 hover:text-primary transition-colors p-1"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-border-dark bg-bg-dark/98 backdrop-blur-xl"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((l) =>
                l.external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-slate-300 hover:text-primary transition-colors py-1 font-ibm"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-slate-300 hover:text-primary transition-colors py-1 font-ibm"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold font-ibm mt-2"
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
