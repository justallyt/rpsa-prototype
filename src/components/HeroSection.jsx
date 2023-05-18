import React from 'react'
import { HiArrowRight } from "react-icons/hi"
import {BsArrowDown} from "react-icons/bs"
import heroImg from "../assets/hero-bg.jpg"
import { NavLink } from 'react-router-dom'
const HeroSection = () => {
  return (
    <div className='hero-wrapper'>
         <div className="inner-row">
                   <div className="hero-texts-content">
                           <h1>We are a fine architecture firm in Kenya</h1>

                           <p>We believe that bespoke structures have the power to shape a positive future for people. By embracing innovation, and with expertise grounded in a decade of practice, we deliver healthier, safer, and smarter buildings and spaces.</p>

                           <div className="action-btns">
                                    <NavLink to={'/contact'}>Get in Touch <span><HiArrowRight /></span></NavLink>
                                    <NavLink to={'/projects'}>Browse Portfolio</NavLink>
                           </div>

                           <div className="arrow-down">
                                  <span><BsArrowDown /></span>
                           </div>
                   </div>

                   <div className="hero-image-wrapper">
                              <img src={heroImg} alt="" />
                   </div>
                   <div className="bg-lines">
                         <div className="bg-lines-outside">
                                 <div className="bg-lines-inside"></div>
                         </div>
                   </div>
                   <div className="bg-transition">
                             <div className="bg-lines">
                                   <div className="bg-lines-outside black">
                                           <div className="bg-lines-inside black"></div>
                                   </div>
                             </div>
                   </div>
                  
         </div>
    </div>
  )
}

export default HeroSection