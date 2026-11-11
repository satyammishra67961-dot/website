import React from 'react'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { BRAND } from '../data.js'

export default function Portfolio() {
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title">
            Explore My <span className="grad-text">Work</span>
          </h2>
          <p className="section-sub">See what I can create for your business.</p>
        </Reveal>

        <Reveal>
          <article className="project">
            <div className="project-visual">
              <div className="laptop">
                <div className="laptop-screen">
                  <div className="screen-inner">
                    <div className="screen-bar">
                      <span /><span /><span />
                    </div>
                    <div className="screen-hero" />
                    <div className="screen-rows">
                      <span /><span /><span />
                    </div>
                  </div>
                </div>
                <div className="laptop-base" />
              </div>

              <div className="phone" aria-hidden="true">
                <div className="phone-inner">
                  <div className="ph-bar" />
                  <div className="ph-block" />
                  <div className="ph-row" />
                  <div className="ph-row" />
                </div>
              </div>
            </div>

            <div className="project-body">
              <span className="project-tag">Live Project</span>
              <h3>My Website Demo</h3>
              <p>
                A website project designed and developed by me. Explore my design style and website development
                skills.
              </p>
              <div className="project-actions">
                <a
                  className="btn btn-primary"
                  href={BRAND.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Demo
                  <Icon name="external" width="18" height="18" />
                </a>
                <a className="btn btn-ghost" href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Build Something Like This
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
