import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Scene3D from './Scene3D.jsx'
import { Icon, InstagramIcon } from './Icons.jsx'
import { BRAND } from '../data.js'

const VIDEO_SRC = `${import.meta.env.BASE_URL}assets/hero-video.mp4`
const POSTER_SRC = `${import.meta.env.BASE_URL}assets/hero-poster.png`

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const attempt = v.play()
    if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {})
  }, [ready])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play().catch(() => {})
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  const showVideo = ready && !failed

  return (
    <section id="home" className="hero">
      <div className="hero-fallback" />
      {!failed && (
        <video
          ref={videoRef}
          className="hero-video"
          style={{ opacity: ready ? 1 : 0, transition: 'opacity 1.2s ease' }}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          controls={false}
          onLoadedData={() => setReady(true)}
          onError={() => setFailed(true)}
          aria-hidden="true"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      )}

      <div className="hero-overlay" />
      <Scene3D />

      <motion.div className="hero-content" initial="hidden" animate="show">
        <motion.span className="hero-badge" variants={fadeUp} custom={0}>
          {BRAND.badge}
        </motion.span>

        <motion.div className="hero-logo" variants={fadeUp} custom={1}>
          webb<span style={{ color: 'var(--purple-2)' }}>_</span>makerr
        </motion.div>

        <motion.h1 className="hero-title" variants={fadeUp} custom={2}>
          Build Your <span className="grad-text">Digital Presence.</span>
        </motion.h1>

        <motion.p className="hero-desc" variants={fadeUp} custom={3}>
          {BRAND.description}
        </motion.p>

        <motion.p className="hero-support" variants={fadeUp} custom={4}>
          {BRAND.supporting}
        </motion.p>

        <motion.div className="hero-cta" variants={fadeUp} custom={5}>
          <a className="btn btn-primary" href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">
            Book Your Website
            <Icon name="arrow-right" width="18" height="18" />
          </a>
          <button className="btn btn-ghost" type="button" onClick={scrollToWork}>
            Explore My Work
          </button>
        </motion.div>

        <motion.a
          className="hero-insta"
          variants={fadeUp}
          custom={6}
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="insta-badge"><InstagramIcon /></span>
          {BRAND.instagramHandle}
        </motion.a>
      </motion.div>

      {showVideo && (
        <div className="video-controls">
          <button className="icon-btn" onClick={togglePlay} aria-label={playing ? 'Pause video' : 'Play video'} title={playing ? 'Pause' : 'Play'}>
            <Icon name={playing ? 'pause' : 'play'} />
          </button>
          <button className="icon-btn" onClick={toggleMute} aria-label={muted ? 'Unmute video' : 'Mute video'} title={muted ? 'Sound on' : 'Sound off'}>
            <Icon name={muted ? 'mute' : 'volume'} />
          </button>
        </div>
      )}

      <button className="scroll-indicator" onClick={scrollToWork} aria-label="Scroll to portfolio">
        <span className="scroll-mouse" />
        Scroll
      </button>
    </section>
  )
}
