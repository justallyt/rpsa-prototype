import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutService = ({ item }) => {
  return (
    <div className='about-service'>
          <div className="bg-lines">
              <div className="bg-lines-outside black">
                      <div className="bg-lines-inside black"></div>
              </div>
           </div>
           <div className="inner-row">
                  <div className="about-service-content">
                            <h2>About the Service</h2>

                            <p>{item.description.txtA}</p>

                            { item.description.txtB && <p>{item.description.txtB}</p>}

                            <h3>What's Included in the Service?</h3>

                            <ul>
                                 { item.inclusion.map((par, i)=> 
                                           <li key={i}>{par}</li>
                                    )}
                            </ul>

                            <NavLink to={'/contact'}>Get in Touch</NavLink>
                  </div>
           </div>
    </div>
  )
}

export default AboutService