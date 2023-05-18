import React from 'react'
import WholeNavbar from '../components/Navigation/WholeNavbar'
import Filtered from '../components/Filtered'
import Footer from '../components/Footer'
import SimpleNudge from '../components/SimpleNudge'

const Type = () => {
  return (
    <>
        <div className="type-intro">
               <WholeNavbar />
               <div className="bg-lines">
                    <div className="bg-lines-outside">
                          <div className="bg-lines-inside"></div>
                   </div>
             </div>
                <Filtered />
        </div>
        <SimpleNudge />
        <Footer />
    </>
  )
}

export default Type