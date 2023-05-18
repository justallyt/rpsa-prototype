import React from 'react'
import { faqs } from '../data/faqs'
import FaqMoja from './FaqMoja'
const Faqs = () => {
  return (
    <div className='faqs-section'>
            <div className="inner-row">
                    <div className="bg-lines">
                         <div className="bg-lines-outside black">
                                 <div className="bg-lines-inside black"></div>
                         </div>
                      </div>
                       <div className="faqs-section-content">
                                 <h1>Have A Question?</h1>

                                 <div className="faqs-section-row">
                                         <div className="faqs-side-moja">
                                            { faqs.slice(0,3).map(item => 
                                                   <FaqMoja {...item} key={item.id}/>
                                            )}
                                         </div>
                                         <div className="faqs-side-moja">
                                            { faqs.slice(3,6).map(item => 
                                                <FaqMoja {...item} key={item.id}/>
                                             )}
                                         </div>
                                 </div>
                       </div>
            </div>
    </div>
  )
}

export default Faqs