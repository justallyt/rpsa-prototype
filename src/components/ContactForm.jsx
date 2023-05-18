import React from 'react'
import { HiArrowRight } from "react-icons/hi"

const ContactForm = () => {
  return (
    <div className='contact-form-section'>
           <div className="bg-lines">
                     <div className="bg-lines-outside black">
                            <div className="bg-lines-inside black"></div>
                     </div>
          </div>
            <div className="inner-row">
                     <div className="contact-form-content">
                              <form action="">
                                     <div className="form-row">
                                            <div className="form-column"> 
                                                 <label htmlFor="name">Name</label>
                                                 <input type="text" className='form-control' placeholder='John Doe'/>
                                            </div>
                                            <div className="form-column"> 
                                                 <label htmlFor="email">Email</label>
                                                 <input type="email" className='form-control' placeholder='email@example.com'/>
                                            </div>
                                     </div>
                                     <div className="form-row">
                                              <div className="form-column">
                                                      <label htmlFor="phone">Phone number</label>
                                                      <input type="text" className='form-control' placeholder='(123) - 465 7890' />
                                              </div>
                                              <div className="form-column">
                                                       <label htmlFor="subject">Subject</label>
                                                       <input type="text" className='form-control' placeholder='Ex. Services' />
                                              </div>
                                     </div>
                                     <div className="message-part">
                                               <label htmlFor="message">Message</label>
                                               <textarea name="" id="" cols="30" rows="10" placeholder='Please describe what service you are interested in...'></textarea>
                                     </div>

                                     <button>Send Message <span><HiArrowRight /></span></button>
                              </form>
                     </div>
            </div>
    </div>
  )
}

export default ContactForm