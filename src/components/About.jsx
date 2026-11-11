import React from 'react'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-wrap">
        <Reveal className="about-visual">
          <div className="float-chip c1">
            <span className="dot" /> Available for projects
          </div>
          <div className="code-window">
            <div className="code-top">
              <span /><span /><span />
            </div>
            <div className="code-body">
              <div><span className="c">{'// webb_makerr studio'}</span></div>
              <div><span className="k">const</span> brand = {'{'}</div>
              <div>&nbsp;&nbsp;name: <span className="s">'webb_makerr'</span>,</div>
              <div>&nbsp;&nbsp;focus: [<span className="s">'websites'</span>, <span className="s">'3D'</span>],</div>
              <div>&nbsp;&nbsp;goal: <span className="s">'digital presence'</span>,</div>
              <div>{'}'}</div>
              <div><span className="k">function</span> <span className="f">build</span>(idea) {'{'}</div>
              <div>&nbsp;&nbsp;<span className="k">return</span> design(idea) <span className="c">{'// ✦'}</span></div>
              <div>{'}'}</div>
            </div>
          </div>
          <div className="float-chip c2">
            <span className="dot" /> 3D &amp; Motion Ready
          </div>
        </Reveal>

        <Reveal className="about-text" delay={120}>
          <span className="eyebrow">About Me</span>
          <h2>
            Turning Ideas Into <span className="grad-text">Digital Experiences</span>
          </h2>
          <p>
            I am a website developer specializing in modern business websites, professional landing pages and
            interactive 3D web experiences.
          </p>
          <p>
            My goal is to help businesses build a strong online presence through creative designs, modern technology
            and beautiful user experiences.
          </p>

          <div className="about-stats">
            <div className="stat">
              <b className="grad-text">100%</b>
              <span>Custom Design</span>
            </div>
            <div className="stat">
              <b className="grad-text">3D</b>
              <span>Interactive Web</span>
            </div>
            <div className="stat">
              <b className="grad-text">24/7</b>
              <span>WhatsApp Support</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
