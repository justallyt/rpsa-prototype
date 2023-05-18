import React from 'react'
import { IoMdCall } from "react-icons/io"
import { BsEnvelopeOpen } from "react-icons/bs"

const ServiceContact = () => {
  return (
    <div className='service-contact'>
            <div className="bg-lines">
                       <div className="bg-lines-outside black">
                                <div className="bg-lines-inside black"></div>
                        </div>
            </div>
             <div className="inner-row">
                       <div className="service-contact-content">
                                 <div className="contact-text-column">
                                       <h1>Get A Quick Qoute Today</h1>
                                       <p>Reach out to our team to learn more about this service</p>

                                       <h4>Prefer to reach out directly?</h4>

                                       <div className="column-box"> 
                                               <span><IoMdCall /></span>
                                               <p>+254 721 286 228</p>
                                         </div>
                                         <div className="column-box">
                                                  <span><BsEnvelopeOpen /></span>
                                                  <p>inquiries@rpsa.co.ke</p>
                                         </div>
                                 </div>
                                 <div className="contact-form-column">
                                         <form action="/">
                                                 <div className="form-row">
                                                           <div className="form-column">
                                                                  <label htmlFor="Name">Name</label>
                                                                  <input type="text" placeholder='John Doe' className='form-base' />
                                                           </div>
                                                           <div className="form-column">
                                                                   <label htmlFor="Email">Email</label>
                                                                   <input type="email" placeholder='email@example.com' className='form-base'/>
                                                           </div>
                                                 </div>
                                                 <div className="form-row">
                                                           <div className="form-column">
                                                                      <label htmlFor="Phone">Phone Number</label>
                                                                      <input type="text" placeholder='(254) 7123 45678' className='form-base'/>
                                                           </div>
                                                           <div className="form-column">
                                                                     <label htmlFor="Subject">Subject</label>
                                                                     <input type="text" className='form-base' placeholder="Ex. Project" />
                                                           </div>
                                                 </div>
                                                 <div className="form-textarea">
                                                         <label htmlFor="Message">Message</label>
                                                         <textarea placeholder="Please describe what service you are interested in..." cols="30" rows="10"></textarea>
                                                 </div>

                                                 <div className="form-btn">
                                                         <button type="submit">Send Message</button>
                                                 </div>
                                         </form>
                                 </div>
                       </div>
             </div>
    </div>
  )
}

export default ServiceContact