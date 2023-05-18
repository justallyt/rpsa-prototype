import React, { useEffect, useRef } from 'react'
import {BsArrowRight} from "react-icons/bs"
import { BsArrowLeft } from "react-icons/bs"
import { service_excerpts as data } from '../data/service_excerpts'
import ServiceBox from './ServiceBox'
const ServicesSection = () => {
 const leftBtnRef = useRef()
 const rightBtnRef = useRef()
 const sliderRef = useRef()

 useEffect(() => {
        const leftBtn = leftBtnRef.current
        const rightBtn = rightBtnRef.current
        const loadedSlider = sliderRef.current;
        const slides = loadedSlider.querySelectorAll('.service-box')
        let counter = 1;
        const size = slides[0].clientWidth + 35;
        
        loadedSlider.style.transform = 'translateX('+(-size * counter) + 'px)';

        rightBtn.addEventListener("click", () =>{
                loadedSlider.style.transition = 'transform 0.6s ease-in-out';
                counter++;
                loadedSlider.style.transform = 'translateX('+(-size * counter) + 'px)';
            
                loadedSlider.addEventListener('transitionend', () =>{
                      if(counter > slides.length - 3){
                           loadedSlider.style.transition = 'none';
                           counter = 2;
                           loadedSlider.style.transform = 'translateX('+(-size * counter) + 'px)';
                      }
                })
        })
        leftBtn.addEventListener("click", () =>{
                loadedSlider.style.transition = 'transform 0.6s ease-in-out';
                counter--;
                loadedSlider.style.transform = 'translateX('+(-size * counter) + 'px)';

                loadedSlider.addEventListener('transitionend', () =>{
                      if(counter < 0){
                            loadedSlider.style.transition = 'none';
                            counter = slides.length - 3;
                            loadedSlider.style.transform = 'translateX('+(-size * counter) + 'px)';
                      }
               })
        })
 })
  return (
    <div className='service-section'>
           <div className="inner-row">
                    <div className="service-section-content">
                             <div className="service-intro">
                                    <div className="intro-description">
                                              <h1>Our Services</h1>
                                               <p>We are problem solvers and love the challenge each project brings. By embracing innovation and pushing the boundaries of design, we are reimagining the way we shape new or existing spaces and enhancing the way people experience them. </p>
                                    </div>

                                     <div className="service-toggle">
                                             <div className="toggle-btn" ref={leftBtnRef}>
                                                     <span><BsArrowLeft /></span>
                                             </div>
                                             <div className="toggle-btn" ref={rightBtnRef}>
                                                       <span><BsArrowRight /></span>
                                             </div>
                                     </div>
                             </div>

                             <div className="services-row">
                                  <div className="service-track-wrapper">
                                           <div className="services-track" ref={sliderRef}>
                                                    {data.map(item => <ServiceBox {...item} key={item.id}  />)}
                                           </div>
                                  </div>
                             </div>
                    </div>
                    <div className="bg-lines">
                         <div className="bg-lines-outside black">
                                 <div className="bg-lines-inside black"></div>
                         </div>
                   </div>
           </div>
    </div>
  )
}

export default ServicesSection