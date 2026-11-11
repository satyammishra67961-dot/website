import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Booking from './components/Booking.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <WhyChoose />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
