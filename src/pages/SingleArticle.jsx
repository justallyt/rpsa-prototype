import React, { useEffect, useState } from 'react'
import WholeNavbar from '../components/Navigation/WholeNavbar'
import { request, gql } from "graphql-request"
import { useQuery } from 'react-query'
import parse from "html-react-parser"
import { useParams } from 'react-router-dom'
import SimpleNudge from '../components/SimpleNudge'
import Footer from '../components/Footer'

const endpoint = import.meta.env.VITE_API_URL;

const BLOG_QUERY = gql`
       {
           renessianceBlogs {
                id
                date
                title
                slug
                author
                readTime
                category
                mainImage {
                    url
                }
                body {
                     html
                }
           }
       }     
`
const SingleArticle = () => {
  const [ things, setThings ] = useState(null)
  const param = useParams()

  const { data } = useQuery("launch", () =>{
    return request(endpoint, BLOG_QUERY)
 })

useEffect(() =>{
      if(data !== undefined){
            const sanitizedByUrl = data.renessianceBlogs.find(item => item.slug === param.id)
           setThings(sanitizedByUrl)
      }
}, [])

 const formatDate = (param) =>{
        const simple_date = new Date(param)
        const simplified = simple_date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        
        return simplified
 }
 const extractSimpleString = (param) =>{
       return parse(param)
 }

  return(
    <>
         <div className="article-hero">
                  <WholeNavbar />
                  <div className="bg-lines">
                         <div className="bg-lines-outside">
                               <div className="bg-lines-inside"></div>
                         </div>
                   </div>
                  <div className="article-body">
                         <div className="bg-lines">
                                <div className="bg-lines-outside">
                                      <div className="bg-lines-inside"></div>
                                </div>
                          </div>
                         <div className="inner-row">
                                 <div className="article-body-content">
                                         { things !== null ?
                                               <div className='article-body-yote'>
                                                       <h1>{things.title}</h1>
                                                       <div className="title-captions">
                                                               <div className="column">
                                                                     <h5>Written By</h5>
                                                                     <p>{things.author}</p>
                                                               </div>
                                                               <div className="column">
                                                                        <h5>Published On</h5>
                                                                        <p>{formatDate(things.date)}</p>
                                                               </div>
                                                               <div className="column">
                                                                        <h5>Category</h5>
                                                                        <p>{things.category}</p>
                                                               </div>
                                                               <div className="column">
                                                                        <h5>Read Time</h5>
                                                                        <p>{things.readTime}</p>
                                                               </div>
                                                       </div>

                                                       <div className="article-image">
                                                              <img src={things.mainImage.url} alt="" />
                                                       </div>

                                                       <div className="blog-body">
                                                              { extractSimpleString(things.body.html)}
                                                       </div>
                                               </div>
                                         : 
                                             "Nothing to render"
                                         }
                                 </div>
                         </div>
                  </div>
         </div>
         <SimpleNudge />
         <Footer />
    </>
  )
}

export default SingleArticle