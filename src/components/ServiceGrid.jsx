import React from 'react'
import { service_excerpts } from '../data/service_excerpts'
import { NavLink } from 'react-router-dom';
const ServiceGrid = () => {
    const sanitized = service_excerpts.slice(1, 7);
    
  return (
    <div className='service-grid'>
           <div className="bg-lines">
                    <div className="bg-lines-outside">
                             <div className="bg-lines-inside"></div>
                    </div>
           </div>
           <div className="inner-row">
                   <div className="service-grid-row">
                          { sanitized.map(item => 
                                 <div className="service-column" key={item.id}>
                                         <div className="column-image">
                                                 <img src={item.image} alt="" />
                                         </div>
                                         <h3>{item.title}</h3>
                                         <p>{item.description}</p>

                                         <NavLink to={'/services/architectural-consultancy'}>View Service</NavLink>
                                 </div>
                            )}
                   </div>
           </div>
    </div>
  )
}

export default ServiceGrid