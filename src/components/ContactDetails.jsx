import React from 'react'
import { SlLocationPin } from "react-icons/sl"
import { HiOutlinePhone } from "react-icons/hi"
const ContactDetails = () => {
  return (
    <div className='details-section'>
             <div className="inner-row">
                    <div className="bg-lines">
                             <div className="bg-lines-outside">
                                   <div className="bg-lines-inside"></div>
                            </div>
                     </div>
                     <div className="details-section-content">
                              <div className="small-details">
                                      <div className="small-details-box">
                                                 <h2>Contacts</h2>
                                                 <div className="contact-header">
                                                          <span><SlLocationPin /></span>
                                                          <h3>Address</h3>
                                                 </div>
                                                 <p>Ngara Parklands Avenue</p>
                                                 <p>Nairobi, 7865 St</p>

                                                 <div className="contact-header">
                                                          <span><HiOutlinePhone /></span>
                                                          <h3>Reach Us Directly</h3>
                                                 </div>
                                                 <a href="tel:+254712345678"> +254 712345678</a>
                                                 <a href="mailto:robin@rpsa.co.e">robin@rpsa.co.ke</a>
                                      </div>
                              </div>
                              <div className="contact-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d776.5800761965743!2d36.820271134606294!3d-1.2719103102406089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1728a689a221%3A0x262b3601b40f1761!2sMy%20Child%20My%20Friend!5e0!3m2!1sen!2ske!4v1684342431216!5m2!1sen!2ske" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                              </div>
                     </div>
             </div>
    </div>
  )
}

export default ContactDetails