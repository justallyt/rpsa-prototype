import React from 'react'
import "../css/services.css"
import WholeNavbar from '../components/Navigation/WholeNavbar'
import ServiceGrid from '../components/ServiceGrid'
import Testimonials from '../components/Testimonials'
import Footer from "../components/Footer"
import { useParams } from 'react-router-dom'

const Services = () => {

  return (
    <>
          <div className="services-intro">
                   <WholeNavbar />
                   <div className="bg-lines">
                           <div className="bg-lines-outside">
                                     <div className="bg-lines-inside"></div>
                            </div>
                  </div>
                   <div className="services-intro-wrap">
                          <div className="inner-row">
                                     <div className="intro-wrapper-texts">
                                             <h1>Our Services</h1>
                                             <p>Through creative use of innovative technologies and tools, pushing the boundaries of design and making smarter use of materials, we are reimagining the way we shape new or existing spaces and enhancing the way people experience them.</p>
                                     </div>
                          </div>
                   </div>
          </div>
          <ServiceGrid />
          <Testimonials />
          <Footer />
    </>
  )
}

export default Services