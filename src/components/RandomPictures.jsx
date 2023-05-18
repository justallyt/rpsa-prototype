import React from 'react'

const RandomPictures = ({ data }) => {
  return (
    <div className='random-pictures'>
           <div className="inner-row">
                  <div className="bg-lines">
                         <div className="bg-lines-outside black">
                                 <div className="bg-lines-inside black"></div>
                         </div>
                   </div>
                    <div className="random-pictures-content">
                             <h1>Project Site</h1>

                             <div className="pictures-row">
                                     { data.map((kitu,i)=> 
                                           <div className="project-site-image" key={i}>
                                                    <img src={kitu} alt="" />
                                           </div>
                                        )}
                             </div>
                    </div>
           </div>
    </div>
  )
}

export default RandomPictures