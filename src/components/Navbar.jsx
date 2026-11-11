import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon, InstagramIcon } from './Icons.jsx'
import { BRAND, NAV_LINKS } from '../data.js'
import { useScrollY } from '../hooks.js'

export default function Navbar() {
  const scrolled = useScrollY(40)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className="logo" href="#home" onClick={(e) => go(e, '#home')}>
            <span className="logo-mark">w</span>
            <span className="logo-text">
              webb<span className="underscore">_</span>makerr
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              className="icon-btn insta"
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              title={BRAND.instagramHandle}
            >
              <InstagramIcon />
            </a>
            <a className="btn btn-primary" href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
            <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
              <Icon name={open ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06 }}
              >
                {l.label}
              </motion.a>
            ))}
            <div className="mobile-cta">
              <a className="btn btn-primary" href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Book Your Website
              </a>
              <a className="btn btn-insta" href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer">
                <InstagramIcon width="18" height="18" /> {BRAND.instagramHandle}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
