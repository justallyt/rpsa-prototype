import React from 'react'
import architect from '../assets/architect1.jpg'
import { NavLink } from 'react-router-dom'
import { HiOutlineArrowLongRight } from "react-icons/hi2"
const Expertise = () => {
  return (
    <div className='expertise'>
             <div className="bg-lines">
                           <div className="bg-lines-outside">
                                     <div className="bg-lines-inside"></div>
                            </div>
                </div>
             <div className="inner-row">
                       <div className="expertise-content">
                                  <div className="expertise-description-plus-image">
                                            <h2>Explore RPSA</h2>
                                            <p>When working with us you can expect diverse expertise, knowledgable and talented people, efficient procurement processess coupled with benefits of years of experience</p>

                                            <div className="expertise-image">
                                                    <img src={architect} alt="" />
                                            </div>
                                  </div>
                                  <div className="sectors-and-services">
                                          <div className="sectors-inner">
                                                <h3>Multi-Service and Sector Expertise</h3>
                                                 <div className="services-and-sectors-row">
                                                      <div className="column services">
                                                             <h2>Services</h2>
                                                             <ul>
                                                                   <li><NavLink>Architectural Consultancy <span><HiOutlineArrowLongRight /></span></NavLink> </li>
                                                                   <li><NavLink>Interior Design <span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                                   <li><NavLink>Building Surveying <span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                                   <li><NavLink>Construction Management <span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                                   <li><NavLink>Designs & Drawings <span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                                   <li><NavLink>Project Supervision <span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                                   <li><NavLink>Research and Feasibility studies<span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                                   <li><NavLink>Environmental Impact Assessment<span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                             </ul>
                                                      </div>
                                                      <div className="column sectors">
                                                               <h2>Sectors</h2>
                                                               <ul>
                                                                     <li><NavLink>Health Care <span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                                     <li><NavLink>Residential<span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                                     <li><NavLink>Education Institutions <span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                                     <li><NavLink>Religious Facilities<span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                                     <li><NavLink>Hospitality & Leisure <span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                                     <li><NavLink>Interiors<span><HiOutlineArrowLongRight /></span></NavLink></li>
                                                                     
                                                               </ul>
                                                      </div>
                                                </div>
                                          </div>
                                  </div>
                       </div>
             </div>
    </div>
  )
}

export default Expertise