import React, { useEffect, useRef, useState } from 'react'
import { testimonials } from '../data/testimonials'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { RiDoubleQuotesR } from 'react-icons/ri'
import { HiOutlineArrowLongRight } from "react-icons/hi2"
import {HiOutlineArrowLongLeft} from "react-icons/hi2"
import { useLocation, useParams } from 'react-router-dom'
const Testimonials = () => {
    const [activeLeft, setActiveLeft] = useState(false)
    const [activeRight, setActiveRight] = useState(false);
    const leftBtnRef = useRef();
    const rightBtnRef = useRef();
    const sliderTrack = useRef();
 
//    const location = useLocation()
//    const path = location.pathname.slice(1,9)

   const param = useParams()
   console.log()

    useEffect(() => {
            const leftBtn = leftBtnRef.current;
            const rightBtn = rightBtnRef.current;
            const testimonialSlider = sliderTrack.current;
            let counter = 0;
            const testimonialSlides = testimonialSlider.querySelectorAll(".testimonial-moja");

            //testimonialSlider.style.transform = 'translateX('+(-100 * counter)+'%)';

            if(counter == 0){
                leftBtn.classList.add("disabled")
            }
            leftBtn.addEventListener("click", () => {
                rightBtn.classList.remove('disabled')
                testimonialSlider.style.transition = "all 0.8s ease";
                counter--;
                testimonialSlider.style.transform = 'translateX('+(-100 * counter)+'%)';
                if(counter === 0){
                    leftBtn.classList.add("disabled")
                }
            })
             
            rightBtn.addEventListener("click", () => {
                leftBtn.classList.remove('disabled')
                testimonialSlider.style.transition = "all 0.8s ease";
                counter++;
                testimonialSlider.style.transform = "translateX("+(-100 * counter)+"%)";

                if(counter >= testimonialSlides.length - 1){
                    rightBtn.classList.add("disabled")
                } 
            })
   
    }, []);
  return (

    <div id='testimonials' className={JSON.stringify(param) !== '{}' ? 'whitish' : ''}>
               <div className="inner-row">
                      { JSON.stringify(param) !== '{}' ?
                           <div className="bg-lines">
                                   <div className="bg-lines-outside">
                                           <div className="bg-lines-inside"></div>
                                   </div>
                           </div> :
                           <div className="bg-lines">
                                      <div className="bg-lines-outside black">
                                                <div className="bg-lines-inside black"></div>
                                       </div>
                           </div>
                      }
                      <div className="testimonials-content">
                              <h1>What Our Clients Say</h1>

                             <div className={ JSON.stringify(param) !== '{}' ? "switch-btns whitish" : "switch-btns"}>
                                     <span ref={leftBtnRef}><HiOutlineArrowLongLeft /></span>
                                     <span ref={rightBtnRef}><HiOutlineArrowLongRight /></span>
                             </div>
                              <div className="testimonials-row">
                                     <div className="testimonials-track" ref={sliderTrack}>
                                              { testimonials.map( item => 
                                                    <div className="testimonial-moja" key={item.id}>
                                                               <div className="testimonial-image">
                                                                        { JSON.stringify(param) !== '{}'? <img src={`../${item.image}`} alt="" /> : <img src={item.image} alt="" />}
                                                               </div>
                                                               <div className="testimonials-text-box">
                                                                       <p><span><RiDoubleQuotesL /></span> {item.message} <span><RiDoubleQuotesR /></span></p>
                                                                       <h4>{item.person}</h4>
                                                                       <h5>{item.position}</h5>
                                                               </div>
                                                    </div>
                                                )}
                                     </div>
                              </div>
                      </div>
               </div>
    </div>
  )
}

export default Testimonials