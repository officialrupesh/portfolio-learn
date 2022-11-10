import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      
      <Navbar />
      <HeroImg2 heading="ABOUT. " text="About Me"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About