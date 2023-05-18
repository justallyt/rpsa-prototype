import React, { useState } from 'react'
import { BsPlusLg } from "react-icons/bs"
import { TfiMinus } from "react-icons/tfi"
const FaqMoja = ({ question, answer }) => {
    const [ status, setStatus ] = useState(false)

    const changeStatus = () => {
           setStatus(!status)
    }
  return (
        <div className="faq-moja">
             <div className={ status ? "faq-question active " : "faq-question"} onClick={changeStatus}>
                   <h2>{question}</h2>
                   <span className='plus'><BsPlusLg /></span>
                   <span className='minus'><TfiMinus /></span> 
            </div>
           <div className={ status ? "faq-answer active" : "faq-answer"}>
                  <div className="faq-answer-inner">
                         <p>{answer}</p>
                   </div>
            </div>
</div>
  )
}

export default FaqMoja