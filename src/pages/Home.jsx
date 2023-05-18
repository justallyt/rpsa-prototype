import React from 'react'
import "../css/home.css"
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import WholeNavbar from '../components/Navigation/WholeNavbar'
import AboutSection from '../components/AboutSection'
import SimpleNudge from '../components/SimpleNudge'
import Portfolio from '../components/Portfolio'
import Choose from '../components/Choose'
import Partners from '../components/Partners'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
         <section id="landing">
                 <WholeNavbar />
                 <HeroSection />
         </section>
         <ServicesSection />
         <AboutSection />
         <SimpleNudge />
         <Portfolio />
         <Choose />
         <Partners />
         <BlogSection />
         <Footer />
    </>
  )
}

export default Home