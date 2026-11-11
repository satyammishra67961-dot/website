import React, { useState } from 'react'
import { Icon, WhatsAppIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { BRAND, SERVICE_OPTIONS } from '../data.js'

const initial = {
  name: '',
  business: '',
  phone: '',
  service: '',
  budget: '',
  requirements: '',
  time: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your full name.'
  if (!form.business.trim()) errors.business = 'Please enter your business name.'

  const phoneDigits = form.phone.replace(/[^\d]/g, '')
  if (!form.phone.trim()) {
    errors.phone = 'Please enter your WhatsApp number.'
  } else if (!/^[+\d][\d\s()-]{6,}$/.test(form.phone.trim()) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = 'Enter a valid number (7–15 digits, country code allowed).'
  }

  if (!form.service) errors.service = 'Please select a website service.'
  if (!form.requirements.trim()) errors.requirements = 'Please describe your project requirements.'
  return errors
}

function buildMessage(form) {
  const lines = [
    'Hello webb_makerr!',
    '',
    'I want to book a website development service.',
    '',
    `Name: ${form.name.trim()}`,
    `Business Name: ${form.business.trim()}`,
    `WhatsApp Number: ${form.phone.trim()}`,
    `Website Service: ${form.service}`,
    `Project Budget: ${form.budget.trim() || 'Not specified'}`,
    `Requirements: ${form.requirements.trim()}`,
    `Preferred Contact Time: ${form.time.trim() || 'Not specified'}`,
    '',
    'Please contact me regarding my project.',
  ]
  return lines.join('\n')
}

export default function Booking() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState(null)

  const update = (key) => (e) => {
    const value = e.target.value
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const blur = (key) => () => setTouched((t) => ({ ...t, [key]: true }))

  const submit = (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    setTouched({ name: true, business: true, phone: true, service: true, requirements: true })

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: 'err', text: 'Please fix the highlighted fields before continuing.' })
      const first = document.querySelector('.field.invalid input, .field.invalid select, .field.invalid textarea')
      first?.focus()
      return
    }

    const message = buildMessage(form)
    const url = `${BRAND.whatsappUrl}?text=${encodeURIComponent(message)}`
    const win = window.open(url, '_blank')
    if (!win) window.location.href = url

    setStatus({
      type: 'success',
      text: 'WhatsApp is opening with your details prefilled. Send the message to start the conversation — your booking is confirmed through our WhatsApp chat.',
    })
  }

  const reset = () => {
    setForm(initial)
    setErrors({})
    setTouched({})
    setStatus(null)
  }

  const cls = (key) => `field${touched[key] && errors[key] ? ' invalid' : ''}${key === 'requirements' ? ' full' : ''}`

  return (
    <section id="booking" className="section section-alt">
      <div className="container booking-wrap">
        <Reveal className="booking-aside">
          <span className="eyebrow">Booking</span>
          <h2>
            Let's Build Your <span className="grad-text">Website</span>
          </h2>
          <p>Tell me about your project. Let's turn your idea into reality.</p>

          <ul className="booking-points">
            <li><span className="tick"><Icon name="check" /></span> Fill the form with your project details.</li>
            <li><span className="tick"><Icon name="check" /></span> WhatsApp opens with a prefilled message.</li>
            <li><span className="tick"><Icon name="check" /></span> Send it — we discuss and confirm on WhatsApp.</li>
          </ul>

          <div style={{ marginTop: 30 }}>
            <a className="btn btn-whatsapp" href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon width="18" height="18" /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form className="form-card glass" onSubmit={submit} noValidate>
            <div className="form-grid">
              <div className={cls('name')}>
                <label htmlFor="name">Full Name <span className="req">*</span></label>
                <input id="name" type="text" placeholder="Your full name" value={form.name} onChange={update('name')} onBlur={blur('name')} autoComplete="name" />
                {touched.name && errors.name && <span className="err">{errors.name}</span>}
              </div>

              <div className={cls('business')}>
                <label htmlFor="business">Business Name <span className="req">*</span></label>
                <input id="business" type="text" placeholder="Your business name" value={form.business} onChange={update('business')} onBlur={blur('business')} autoComplete="organization" />
                {touched.business && errors.business && <span className="err">{errors.business}</span>}
              </div>

              <div className={cls('phone')}>
                <label htmlFor="phone">WhatsApp Number <span className="req">*</span></label>
                <input id="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={update('phone')} onBlur={blur('phone')} autoComplete="tel" inputMode="tel" />
                {touched.phone && errors.phone && <span className="err">{errors.phone}</span>}
              </div>

              <div className={cls('service')}>
                <label htmlFor="service">Select Website Service <span className="req">*</span></label>
                <select id="service" value={form.service} onChange={update('service')} onBlur={blur('service')}>
                  <option value="">Choose a service…</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {touched.service && errors.service && <span className="err">{errors.service}</span>}
              </div>

              <div className={cls('budget')}>
                <label htmlFor="budget">Project Budget <span style={{ color: 'var(--muted-2)' }}>(optional)</span></label>
                <input id="budget" type="text" placeholder="e.g. ₹15,000 – ₹30,000" value={form.budget} onChange={update('budget')} />
              </div>

              <div className={cls('time')}>
                <label htmlFor="time">Preferred Contact Time <span style={{ color: 'var(--muted-2)' }}>(optional)</span></label>
                <input id="time" type="text" placeholder="e.g. Weekdays 6–9 PM" value={form.time} onChange={update('time')} />
              </div>

              <div className={cls('requirements')}>
                <label htmlFor="requirements">Project Requirements <span className="req">*</span></label>
                <textarea id="requirements" placeholder="Tell me about your project, goals and any specific features…" value={form.requirements} onChange={update('requirements')} onBlur={blur('requirements')} />
                {touched.requirements && errors.requirements && <span className="err">{errors.requirements}</span>}
              </div>
            </div>

            <div className="form-submit">
              <button type="submit" className="btn btn-whatsapp">
                <WhatsAppIcon width="18" height="18" /> Send Booking on WhatsApp
              </button>
              <button type="button" className="btn btn-ghost" onClick={reset}>Clear</button>
            </div>

            <p className="form-note">
              Your details are only used to open a WhatsApp chat. Nothing is stored on this website and no payment is
              taken here.
            </p>

            {status && <div className={`form-status ${status.type === 'success' ? 'success' : ''}`}>{status.text}</div>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
