import React from 'react'
import { NavLink } from 'react-router-dom'
import educational from "../assets/educational.png"
import hospitality from '../assets/hospitality.png'
import religious from "../assets/religious.png"
import interiors from "../assets/interiors.png"
import residential from "../assets/residential.png"
import health from "../assets/health.png"
import ololua from "../assets/ololua.jpg"
import library from "../assets/library.jpg"
import interior from "../assets/interior.jpg"
import { HiArrowRight } from "react-icons/hi"
const Portfolio = () => {
  return (
    <div className='portfolio-section'>
              <div className="inner-row">
                      <div className="bg-lines">
                           <div className="bg-lines-outside">
                                     <div className="bg-lines-inside"></div>
                            </div>
                      </div>
                       <div className="portfolio-section-content">
                                <div className="portfolio-head">
                                         <div className="portfolio-intro">
                                                   
                                                   <h1>Selected Projects</h1>
                                                   <p>We make buildings and places that matter. Working across a breadth of portfolios, we design by sharing ideas, testing limits, and meeting new challenges.</p>
                                          </div>
                                          <div className="portfolio-categories">
                                                  <NavLink to="/" className="category-moja">
                                                          <div className="icon">
                                                                 <img src={educational} alt="" />
                                                          </div>
                                                          <h3>Educational</h3>
                                                  </NavLink>
                                                  <NavLink to="/" className="category-moja">
                                                          <div className="icon">
                                                                 <img src={hospitality} alt="" />
                                                          </div>
                                                          <h3>Hospitality & Leisure</h3>
                                                  </NavLink>
                                                  <NavLink to="/" className="category-moja">
                                                          <div className="icon">
                                                                 <img src={religious} alt="" />
                                                          </div>
                                                          <h3>Religious</h3>
                                                  </NavLink>
                                                  <NavLink to="/" className="category-moja">
                                                          <div className="icon">
                                                                 <img src={health} alt="" />
                                                          </div>
                                                          <h3>Health</h3>
                                                  </NavLink>
                                                  <NavLink to="/" className="category-moja">
                                                          <div className="icon">
                                                                 <img src={interiors} alt="" />
                                                          </div>
                                                          <h3>Interiors</h3>
                                                  </NavLink>
                                                  <NavLink to="/" className="category-moja">
                                                          <div className="icon">
                                                                 <img src={residential} alt="" />
                                                          </div>
                                                          <h3>Residential</h3>
                                                  </NavLink>
                                          </div>
                                </div>

                                <div className="portfolio-projects-row">
                                           <div className="portfolio-moja">
                                                    <div className="portfolio-image">
                                                            <img src={ololua} alt="" />
                                                    </div>
                                                    <div className="portfolio-description">
                                                              <div className="portfolio-description-inner">
                                                                     <p>Nairobi, Kenya - June 24, 2021</p>
                                                                     <h2>Ololua House Architecture design in Karen, Nairobi</h2>

                                                                     <NavLink to="/">View project</NavLink>
                                                              </div>
                                                    </div>
                                           </div>

                                           <div className="portfolio-moja">
                                                    <div className="portfolio-image">
                                                            <img src={library} alt="" />
                                                    </div>
                                                    <div className="portfolio-description">
                                                              <div className="portfolio-description-inner">
                                                                     <p>Nairobi, Kenya - November 18, 2020</p>
                                                                     <h2>Kirinyaga University Administration Complex, Kirinyaga</h2>

                                                                     <NavLink to="/">View project</NavLink>
                                                              </div>
                                                    </div>
                                           </div>

                                           <div className="portfolio-moja">
                                                    <div className="portfolio-image">
                                                            <img src={interior} alt="" />
                                                    </div>
                                                    <div className="portfolio-description">
                                                              <div className="portfolio-description-inner">
                                                                     <p>Nairobi, Kenya - February 18, 2019</p>
                                                                     <h2>Katani House Interior Design, Machakos</h2>

                                                                     <NavLink to="/">View project</NavLink>
                                                              </div>
                                                    </div>
                                           </div>
                                </div>

                               <div className="action-btns">
                                    <a href="s">Get in Touch <span><HiArrowRight /></span></a>
                                    <a href="s">Browse Portfolio</a>
                                </div>
                       </div>
              </div>
    </div>
  )
}

export default Portfolio