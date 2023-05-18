import React from 'react'
import "../css/about.css"
import WholeNavbar from '../components/Navigation/WholeNavbar'
import arch1 from "../assets/arch1.jpg"
import arch2 from '../assets/arch2.jpg'
import AboutBody from '../components/AboutBody'
import Statements from '../components/Statements'
import Choose from '../components/Choose'
import Expertise from '../components/Expertise'
import Team from '../components/Team'
import Partners from "../components/Partners"
import SimpleNudge from "../components/SimpleNudge"
import Footer from "../components/Footer"
const About = () => {
  return (
    <>
         <section id="intro">
                <WholeNavbar />
                <div className="bg-lines">
                           <div className="bg-lines-outside">
                                     <div className="bg-lines-inside"></div>
                            </div>
                </div>
                <div className="simple-intro-section">
                          <div className="inner-row">
                                    <div className="intro-texts">
                                              <h1>About Our Firm</h1>
                                              <p>We believe that architecture and design matter, and that through our work, we can make a positive difference in the world.</p>
                                    </div>
                                    <div className="images-part">
                                             <div className="image-moja">
                                                    <img src={arch1} alt="" />
                                             </div>
                                             <div className="image-mbili">
                                                    <img src={arch2} alt="" />
                                             </div>
                                    </div>
                          </div>
                </div>
         </section>
         <AboutBody />
         <Statements />
         <Choose />
         <Expertise />
         <Team />
         <Partners />
         <SimpleNudge />
         <Footer />
    </>
  )
}

export default About