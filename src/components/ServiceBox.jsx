import React from 'react'
import { NavLink } from 'react-router-dom'

const ServiceBox = ( { title, description, image, slideID}) => {
  return (
    <div className='service-box' id={slideID ? slideID : null}>
             <div className="service-image">
                      <img src={image} alt="" />
             </div>
             <h2>{title}</h2>
             <p>{description}</p>
             <NavLink to={"/services/architectural-consultancy"}>View Service</NavLink>
    </div>
  )
}

export default ServiceBox