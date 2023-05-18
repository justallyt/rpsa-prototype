import React from 'react'
import WholeNavbar from '../components/Navigation/WholeNavbar'
import "../css/projects.css"
import ProjectFilter from '../components/ProjectFilter'
import SimpleNudge from "../components/SimpleNudge"
import Footer from "../components/Footer"
const Projects = () => {
  return (
    <>
         <div className="project-intro">
                    <WholeNavbar />
                    <div className="bg-lines">
                           <div className="bg-lines-outside">
                                     <div className="bg-lines-inside"></div>
                            </div>
                   </div>
                    <div className="project-intro-wrap">
                             <div className="inner-row">
                                        <div className="project-intro-texts">
                                               <h1>Our Projects</h1>
                                               <p>Built upon almost a decade of experience, our multi-service, multi-sector, and multi-geographical approach gives us a rare perspective on how to shape successful beautiful places.</p>
                                        </div>
                             </div>
                    </div>
         </div>
         <ProjectFilter />
         <SimpleNudge />
         <Footer />
    </>
  )
}

export default Projects