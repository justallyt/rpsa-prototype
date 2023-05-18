import React from 'react'
import arch3 from "../assets/arch3.jpg"
import arch4 from "../assets/arch4.jpg"
import arch5 from "../assets/arch5.jpg"

const AboutBody = () => {
  return (
    <div id='story'>
            <div className="inner-row">
                  <div className="bg-lines">
                         <div className="bg-lines-outside black">
                                 <div className="bg-lines-inside black"></div>
                          </div>
                    </div>
               <div className="story-content">
                     <div className="story-texts">
                            <div className="story-texts-inner">
                                       <h1>Our Firm Story</h1>
                                       <p><span>Renaissance per Salut Architects was founded in 2010 with a commitment to making extraordinary buildings and places that matter.</span> From our studio in Nairobi - Kenya, we work across East Africa and internationally on projects of all scales, from the intimate to the expansive. We strive to ensure that our projects are environmentally sensitive, cost effective and spatially efficient and that they offer value to our clients' investments</p>
                            </div>
                     </div>
                     <div className="story-images">
                              <div className="picha">
                                        <img src={arch3} alt="" />
                              </div>
                              <div className="picha">
                                        <img src={arch4} alt="" />
                              </div>
                     </div>
                </div>
            </div>
            <div className="extra-about">
                     <div className="extra-about-image">
                            <img src={arch5} alt="" />
                     </div>
                     <div className="extra-description-texts">
                            <div className="extra-description-texts-inner">
                                     <p>Our brilliantly diverse and well experienced team have engaged in outstanding projects of varied complexity such as high-density mixed-use developments, multi-family residential projects across all income bands, hotels, bespoke hospital structures, institutional and educational clients.</p>
                                      <p>Offering multiple architecture and building consultancy services, gives us a complete understanding of the full lifecycle of the built environment. We approach every project as unique and seek to create an open and transparent environment for the free expression of professional minds in the design and implementation of the plans.</p>
                            </div>
                     </div>
            </div>
    </div>
  )
}

export default AboutBody