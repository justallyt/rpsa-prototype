import React from 'react'
import honesty from "../assets/honesty.png"
import quality from "../assets/quality.png"
import commitment from "../assets/commitment.png"
import teamwork from "../assets/teamwork.png"
import innovation from "../assets/innovation.png"
import hardwork from "../assets/hardwork.png"

const Statements = () => {
    const values = [
        {
            id: 0,
            title: 'Integrity',
            description: 'We uphold reliability, consistency and accountability throughout the lifetime of your project.',
            icon: honesty
        },
        {
            id: 1,
            title: 'Quality',
            description: 'We are renowned for making extraordinary buildings and places that matter',
            icon: quality
        },
        {
            id: 2,
            title: 'Collaboration',
            description: 'We work with our clients to realise the full potential of each project.',
            icon: teamwork
        },
        {
            id: 3,
            title: 'Innovation',
            description: 'We value curiosity and the ability to take risks when trying to solve a problem.',
            icon: innovation
        },
        {
            id: 4,
            title: 'Commitment',
            description: 'We uphold all the terms agreed upon from start to finish.',
            icon: commitment
        },
        {
            id: 5,
            title: "Growth",
            description: 'We value the constant pursuit of knowledge and a culture that promotes learning.',
            icon: hardwork
        }
    ]
  return (
    <div className='statements'>
            <div className="bg-lines">
                            <div className="bg-lines-outside">
                                     <div className="bg-lines-inside"></div>
                            </div>
                </div>
              <div className="inner-row">
                       <div className="statements-content">
                                <div className="statement-moja">
                                          <h2>Our Vision</h2>
                                          <p>To be the leading architectural firm in Africa providing innovative and practical design solutions.</p>
                                </div>
                                <div className="statement-moja">
                                          <h2>Our Mission</h2>
                                          <p>To deliver healthier, safer and smarter buildings and spaces – in ways that promote creativity, achieve social value and are more sustainable to all our clients.</p>
                                </div>


                                <div className="values">
                                        <div className="values-intro">
                                                  <h2>Our Values</h2>
                                
                                                  <p>At Renaissance Per Salut Architects, our core values are an integral part of our day-to-day business, the starting point for every decision we make. Keeping these key principles in mind helps us stay oriented, moving forward in alignment with our overarching mission.</p>
                                        </div>
                                        <div className="values-themselfu">
                                                { values.map(item => 
                                                     <div className="value-box-moja" key={item.id}>
                                                               <div className="icon-part">
                                                                       <img src={item.icon} alt="" />
                                                               </div>
                                                               <h3>{item.title}</h3>
                                                               <p>{item.description}</p>
                                                     </div>    
                                                )}
                                        </div>
                                </div>
                       </div>
              </div>
    </div>
  )
}

export default Statements