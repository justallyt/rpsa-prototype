import React, { useContext } from 'react'
import logo from "../../assets/logo2.png" 
import { HiArrowRight } from "react-icons/hi"
import { CgMenu } from "react-icons/cg"
import { sidebarContext } from './sidebarcontext'
import { NavLink, useLocation, useParams } from "react-router-dom"

const RegularNavbar = () => {
    const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext)

    const toggleMobileMenu = () =>{
          setSidebarStatus(!sidebarStatus)
    }

    const param = useParams()
    const locator = useLocation()

  return (
    <header>
           <div className="inner-row">
                <div className="header-content">
                       <div className="logo">
                              <a href="/">
                                      <img src={logo} alt="" />
                              </a>
                       </div>
                       <nav>
                              <ul>
                                     <li><NavLink to={'/'}>Home</NavLink></li>
                                     <li><NavLink to={'/about'}>About</NavLink></li>
                                     <li><NavLink to={'/services'} activeclassname={JSON.stringify(param) !== '{}'? 'active' : ' '}>Services</NavLink></li>
                                     <li><NavLink to={'/projects'} className={ locator.pathname.slice(1,8) === 'project' ? 'active' : ''}>Projects</NavLink></li>
                                     <li><NavLink className={ locator.pathname.slice(1,8) === 'article' ? 'active' : ''} to={'/articles'}>Articles</NavLink></li>
                              </ul>
                       </nav>
                        <div className="contact-btn">
                                 <NavLink to={'/contact'}>Get in Touch <span><HiArrowRight /></span></NavLink>
                        </div>

                        <div className="mobile-menu-trigger" onClick={toggleMobileMenu}>
                                <span><CgMenu /></span>
                        </div>
                </div>
           </div>
    </header>
  )
}

export default RegularNavbar