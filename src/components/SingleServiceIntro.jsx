import React from 'react'
import WholeNavbar from './Navigation/WholeNavbar'
import { NavLink } from 'react-router-dom'

const SingleServiceIntro = ( { item }) => {
  return (
    <section id="service-hero">
             <WholeNavbar />
             <div className="bg-lines">
                     <div className="bg-lines-outside">
                                <div className="bg-lines-inside"></div>
                    </div>
              </div>
             <div className="service-hero-section">
                     <div className="inner-row">
                           <div className="service-hero-section-content">
                                    <div className="small-hero-texts">
                                             <div className="small-hero-texts-inner">
                                                       <h1>{item.name}</h1>
                                                       <p>{item.heroText}</p>
                                                       <NavLink>Request Service</NavLink>
                                             </div>
                                     </div>
                                     <div className="small-hero-images">
                                             <img src={item.heroImgs.src1} alt="" />
                                             <img src={item.heroImgs.src2} alt="" />
                                     </div>
                           </div>
                     </div>
             </div>
    </section>
  )
}

export default SingleServiceIntro