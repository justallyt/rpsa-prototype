import React from 'react'
import footerLogo from "../assets/logo2.png"
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
            <div className="inner-row">
                  <div className="bg-lines">
                           <div className="bg-lines-outside">
                                     <div className="bg-lines-inside"></div>
                            </div>
                      </div>
                   <div className="footer-content">
                               <div className="footer-column">
                                       <div className="footer-logo">
                                               <img src={footerLogo} alt="" />
                                       </div>
                                       <p>Our team of experts are ready to take on any challenge - no matter how big, small, or complex. If you've got a project you'd like to discuss, we'd love to hear from you.</p>
                               </div>
                               <div className="footer-column">
                                        <h2>Firm</h2>
                                        <ul>
                                               <li><NavLink to="/">About</NavLink></li>
                                               <li><NavLink to="/">How we work</NavLink></li>
                                               <li><NavLink to="/">Team & Leadership</NavLink></li>
                                               <li><NavLink to="/">Careers</NavLink></li>
                                               <li><NavLink to="/">Awards & Recognition</NavLink></li>
                                        </ul>
                               </div>
                               <div className="footer-column">
                                       <h2>Expertise</h2>
                                       <ul>
                                              <li><NavLink to="">Residential</NavLink></li>
                                              <li><NavLink to="">Hospitality & Leisure</NavLink></li>
                                              <li><NavLink to="">Universities & Colleges</NavLink></li>
                                              <li><NavLink to="">Healthcare</NavLink></li>
                                              <li><NavLink to="">Religious</NavLink></li>
                                              <li><NavLink to="">Interior</NavLink></li>
                                       </ul>
                               </div>
                               <div className="footer-column">
                                        <h2>Connect</h2>
                                        <ul>
                                               <li><NavLink >Contact Us</NavLink></li>
                                               <li><NavLink>LinkedIn</NavLink></li>
                                               <li><NavLink>Instagram</NavLink></li>
                                               <li><NavLink>Facebook</NavLink></li>
                                               <li><NavLink>Twitter</NavLink></li>
                                        </ul>
                               </div>
                   </div>
                   <div className="copyright">
                        <p>Copyright &copy; { new Date().getFullYear() }. All rights reserved.</p>
                   </div>
            </div>
    </footer>
  )
}

export default Footer