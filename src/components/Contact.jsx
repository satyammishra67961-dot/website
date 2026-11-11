import React from 'react'
import { Icon, InstagramIcon, WhatsAppIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { BRAND } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact-card">
          <span className="eyebrow">Contact</span>
          <h2>
            Have a <span className="grad-text">Project in Mind?</span>
          </h2>

          <div className="contact-lines">
            <div className="contact-line">
              <Icon name="sparkle" /> <b>{BRAND.name}</b>
            </div>
            <div className="contact-line">
              <WhatsAppIcon width="18" height="18" /> <b>{BRAND.whatsappDisplay}</b>
            </div>
            <div className="contact-line">
              <InstagramIcon width="18" height="18" /> <b>{BRAND.instagramHandle}</b>
            </div>
          </div>

          <div className="contact-actions">
            <a className="btn btn-whatsapp" href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon width="18" height="18" /> Chat on WhatsApp
            </a>
            <a className="btn btn-insta" href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer">
              <InstagramIcon width="18" height="18" /> Follow on Instagram
            </a>
            <a className="btn btn-primary" href="#booking">
              Book Your Website
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
