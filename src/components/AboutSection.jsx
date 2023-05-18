import React from 'react'
import aboutImg from "../assets/about-img3.jpg"
import { NavLink } from 'react-router-dom'
const AboutSection = () => {
  return (
    <section className='about-section'>
             <div className="inner-row">
                  <div className="bg-lines">
                         <div className="bg-lines-outside">
                                 <div className="bg-lines-inside"></div>
                         </div>
                     </div>
                      <div className="about-section-content">
                                <div className="image-section-wrapper">
                                        <img src={aboutImg} alt="" />
                                </div>
                                <div className="description-section-wrapper">
                                          <div className="wrapper-texts">
                                                  <h1>From Concept to Completion</h1>
                                                  <p>We are a dynamic architectural practice incorporated in Kenya and are committed to excellence in the building industry in Africa. We approach every project with the same commitment to quality, excellence and integrity in all we do.</p>
                                                  <p>Our goal is to provide a service and design consultancy role that exceeds the client's expectations, resulting in highly refined architecture that is tailored to our client's brief.</p>

                                                  <NavLink to={'/about'}>More About Us</NavLink>
                                          </div>
                                </div>
                      </div>
             </div>
    </section>
  )
}

export default AboutSection