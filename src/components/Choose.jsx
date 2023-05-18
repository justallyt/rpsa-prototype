import React from 'react'
import chooseImg from "../assets/choose-img.jpg"
const Choose = () => {
  return (
    <div className='choose-section'>
            <div className="inner-row">
                    <div className="bg-lines">
                         <div className="bg-lines-outside black">
                                 <div className="bg-lines-inside black"></div>
                         </div>
                    </div>
                     <div className="choose-section-content">
                              <div className="choose-description-column">
                                        <h1>How We Work</h1>
                                        <div className="choose-description-row">
                                                 <div className="choose-description-moja">
                                                        <h3>Integrated Team</h3>
                                                        <p>We run an integrated team, with those in leadership positions involved from inception through completion.</p>
                                                 </div>
                                                 <div className="choose-description-moja">
                                                        <h3>We Work Iteratively</h3>
                                                        <p>Our typical workflow begins with an intense dialogue between architects and stakeholders on how to create value for a particular site.</p>
                                                 </div>
                                                 <div className="choose-description-moja">
                                                        <h3>Open Design Process</h3>
                                                        <p>We encourage an open, collaborative environment with our clients and key stakeholders.</p>
                                                 </div>
                                                 <div className="choose-description-moja">
                                                        <h3>Design Technology</h3>
                                                        <p>Renaissance Per Salut is at the forefront of delivering the benefits of technology to our clients.</p>
                                                 </div>
                                        </div>
                              </div>
                              <div className="choose-image-column">
                                     <img src={chooseImg} alt="" />
                              </div>
                     </div>
            </div>
    </div>
  )
}

export default Choose