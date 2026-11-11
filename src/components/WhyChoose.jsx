import React from 'react'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { WHY_CHOOSE } from '../data.js'

function onMove(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Why Me</span>
          <h2 className="section-title">
            Why Choose <span className="grad-text">webb_makerr</span>
          </h2>
          <p className="section-sub">A creative partner focused on quality, speed and results.</p>
        </Reveal>

        <div className="grid grid-3">
          {WHY_CHOOSE.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <article className="card" onMouseMove={onMove}>
                <div className="card-icon">
                  <Icon name={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
