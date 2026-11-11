import React from 'react'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { SERVICES } from '../data.js'

function onMove(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Services</span>
          <h2 className="section-title">
            What I <span className="grad-text">Create</span>
          </h2>
          <p className="section-sub">Creative websites designed to make your business stand out.</p>
        </Reveal>

        <div className="grid grid-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 70}>
              <article className="card" onMouseMove={onMove}>
                <div className="card-icon">
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p style={{ textAlign: 'center', marginTop: 40, color: 'var(--muted-2)', fontSize: '0.88rem' }}>
            I specialize in non-ecommerce website development — focused on brand presence, enquiries and growth.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
