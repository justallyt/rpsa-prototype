import React from 'react'
import kirinyaga from "../assets/kirinyaga.png"
import komarock from "../assets/komarock.png"
import mvuli from "../assets/mvuli.png"
import galaxyInn from "../assets/galaxy-inn.png"
import hillView from "../assets/hill-view.png"
import radiography from "../assets/radiography.png"
import donholm from "../assets/donholm.png"

const Partners = () => {
  return (
    <div className='partners-section'>
             <div className="inner-row">
                    <div className="bg-lines">
                           <div className="bg-lines-outside">
                                     <div className="bg-lines-inside"></div>
                            </div>
                      </div>
                      <div className="partners-section-content">
                                <div className="partners-intro">
                                         <h1>Partners & Clients</h1>
                                         <p>We purpose to establish credible and long term relationships with past clients and other reputable companies or individuals in the industry. </p>
                                </div>

                                <div className="partners-content-row">
                                          <div className="partner-moja">
                                                    <img src={radiography} alt="" />
                                          </div>
                                          <div className="partner-moja">
                                                    <img src={galaxyInn} alt="" />
                                          </div>
                                          <div className="partner-moja">
                                                    <img src={mvuli} alt="" />
                                          </div>
                                          <div className="partner-moja">
                                                    <img src={kirinyaga} alt="" />
                                          </div>
                                          <div className="partner-moja">
                                                    <img src={hillView} alt="" />
                                          </div>
                                          <div className="partner-moja">
                                                    <img src={donholm} alt="" />
                                          </div>
                                          <div className="partner-moja">
                                                    <img src={komarock} alt="" />
                                          </div>
                                </div>
                      </div>
             </div>
    </div>
  )
}

export default Partners