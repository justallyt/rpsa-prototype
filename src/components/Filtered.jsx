import React, { useState,useEffect, useRef} from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { projects, sectors } from '../data/projects'
import { NavLink, useParams } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"

const Filtered = () => {
    const [active, setActive] = useState(false)
    const typeRef  = useRef()
    const param = useParams()
    const showFilter = () =>{
           setActive(!active)
    }

    useEffect(()=>{
        const things = typeRef.current.querySelectorAll("li")
        
        for(let i = 0; i < things.length; i++){
              things[i].addEventListener('click', () =>{
                     setActive(false)
              })
        }
 }, [])
    const filtered_item = sectors.find(item => item.link === param.id)
    
    const sanitized = projects.filter(thing => thing.category === filtered_item.name)
    
  return (
    <div className='filtered-type-section'>
          <div className="bg-lines">
                    <div className="bg-lines-outside">
                          <div className="bg-lines-inside"></div>
                   </div>
             </div>
           <div className="inner-row">
                  <div className="project-filter-content">
                               <div className="filter-bar">
                                       <div className="active-filter">
                                               <h2>{filtered_item.name}</h2>
                                       </div>
                                       <div className="filter-criteria">
                                                <div className="filter-column">
                                                         <label htmlFor="Filter" onClick={showFilter}>Filter By <span><HiChevronDown /></span></label>
                                                         <div className={ active ? "selection-row active" : "selection-row"}>
                                                                <div className="selection-column">
                                                                      <h3>Sectors</h3>
                                                                      <ul ref={typeRef}>
                                                                           {
                                                                              sectors.map(item => 
                                                                                   <li key={item.name}> 
                                                                                          <NavLink to={`/project/type/${item.link}`}>{item.name}</NavLink>
                                                                                   </li>
                                                                               )
                                                                           }
                                                                      </ul>
                                                                </div>
                                                                <div className="selection-column">
                                                                      <h3>Location</h3>
                                                                      <ul>
                                                                            <li>Kenya</li>
                                                                            <li>Uganda</li>
                                                                            <li>Tanzania</li>
                                                                            <li>Rwanda</li>
                                                                      </ul>
                                                                </div>
                                                         </div>
                                                </div>
                                       </div>
                               </div>

                               <div className="filter-contents">
                                        <div className="filter-contents-row">
                                                  { sanitized.map( item =>
                                                         <div className="project-box-moja" key={item.id}>
                                                                   <div className="project-main-image">
                                                                           <img src={`../../${item.image}`} alt="" />
                                                                   </div>
                                                                   <h3>{item.title}</h3>
                                                                   <NavLink to='/'>View Project <span><BsArrowRight /></span></NavLink>
                                                         </div>
                                                    )}
                                        </div>
                               </div>
                       </div>
           </div>
    </div>
  )
}

export default Filtered