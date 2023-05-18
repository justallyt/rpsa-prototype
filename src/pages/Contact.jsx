import React from 'react'
import WholeNavbar from '../components/Navigation/WholeNavbar'
import '../css/contact.css'
import ContactForm from '../components/ContactForm'
import ContactDetails from '../components/ContactDetails'
import Faqs from '../components/Faqs'
import Footer from "../components/Footer"

const Contact = () => {
  return (
    <>
         <div className="contact-hero">
                  <WholeNavbar />
                  <div className="bg-lines">
                         <div className="bg-lines-outside">
                               <div className="bg-lines-inside"></div>
                         </div>
                   </div>
                  <div className="contact-hero-content">
                            <div className="inner-row">
                                    <div className="contact-hero-texts">
                                             <h1>Get in Touch</h1>
                                             <p>For any initial inquiries regarding potential projects or would like to join our exceptional team, shoot us a quick message below.</p>
                                    </div>
                            </div>
                  </div>
         </div>
         <ContactForm />
         <ContactDetails />
         <Faqs />
         <Footer />
    </>
  )
}

export default Contact