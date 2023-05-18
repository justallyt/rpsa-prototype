import React from 'react'
import { NavLink } from 'react-router-dom'

const SimpleNudge = () => {
  return (
    <div className='simple-nudge-section'>
            <div className="inner-row">
                   <div className="bg-lines">
                         <div className="bg-lines-outside black">
                                 <div className="bg-lines-inside black"></div>
                         </div>
                   </div>
                    <div className="simple-nudge-section-content">
                               <div className="nudge-texts">
                                      <h1>Get in touch with us today to get a free project quote.</h1>
                               </div>
                               <div className="nudge-btns">
                                         <NavLink to={'/contact'}>Get in Touch</NavLink>
                                         <NavLink to={'/services'}>Browse Services</NavLink>
                               </div>
                    </div>
            </div>
    </div>
  )
}

export default SimpleNudge