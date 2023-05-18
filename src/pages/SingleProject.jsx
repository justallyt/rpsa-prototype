import React from 'react'
import WholeNavbar from "../components/Navigation/WholeNavbar"
import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import RandomPictures from '../components/RandomPictures'
import Footer from "../components/Footer"
const SingleProject = () => {
  const param = useParams()

  //const { title, image, description, images } = projects.find(item => item.url === param.id)
  const { title, image, description, images }  = projects[0]
  return (
      <>
          <div className="single-project-intro">
                   <WholeNavbar />
                   <div className="bg-lines">
                         <div className="bg-lines-outside">
                               <div className="bg-lines-inside"></div>
                         </div>
                   </div>
                   <div className="projo-texts">
                            <div className="inner-row">
                                   <div className="projo-texts-content">
                                            <div className="image-part">
                                                    <img src={`../${image}`} alt="" />
                                            </div>
                                            <div className="project-details">
                                                    <div className="detail-column">
                                                            <h3>Client</h3>
                                                            <p>Kirinyaga University</p>
                                                    </div>
                                                    <div className="detail-column">
                                                            <h3>Date</h3>
                                                            <p>June 2021</p>
                                                    </div>
                                                    <div className="detail-column">
                                                            <h3>Location</h3>
                                                            <p>Kirinyaga Town</p>
                                                    </div>
                                                    <div className="detail-column">
                                                            <h3>Service</h3>
                                                            <p>Architecture Design</p>
                                                    </div>
                                            </div>
                                            
                                            <div className="project-explanations">
                                                       <h1>{title}</h1>
                                                       {description.map((kitu, i) => 
                                                               <p key={i}>{kitu}</p>
                                                        )}
                                            </div>
                                   </div>
                            </div>
                   </div>
          </div>
          <RandomPictures data={images} />
          <Footer />
     </>
  )
}

export default SingleProject