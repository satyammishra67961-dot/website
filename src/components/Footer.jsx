import React from 'react'
import { InstagramIcon, WhatsAppIcon } from './Icons.jsx'
import { BRAND, NAV_LINKS } from '../data.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#home">
              <span className="logo-mark">w</span>
              <span className="logo-text">
                webb<span className="underscore">_</span>makerr
              </span>
            </a>
            <p>
              Build Your Digital Presence. Modern business websites, premium landing pages and interactive 3D web
              experiences.
            </p>
            <div className="footer-social">
              <a
                className="ig"
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title={BRAND.instagramHandle}
              >
                <InstagramIcon />
              </a>
              <a
                className="wa"
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title={BRAND.whatsappDisplay}
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram — {BRAND.instagramHandle}</a>
            <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp — {BRAND.whatsappDisplay}</a>
            <a href="#booking">Book Your Website</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year > 2026 ? year : 2026} {BRAND.name}. All Rights Reserved.</span>
          <span>Crafted with care by {BRAND.name}</span>
        </div>
      </div>
    </footer>
  )
}
