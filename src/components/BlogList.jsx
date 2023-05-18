import React from 'react'
import { NavLink } from 'react-router-dom';
import { request, gql } from "graphql-request"
import { useQuery } from 'react-query'
import parse from "html-react-parser"

const endpoint = import.meta.env.VITE_API_URL;

const BLOG_QUERY = gql`
       {
           renessianceBlogs {
                id
                date
                title
                slug
                readTime
                mainImage {
                    url
                }
                body {
                     html
                }
           }
       }     
`

const BlogList = () => {
    const { data } = useQuery("launch", () =>{
        return request(endpoint, BLOG_QUERY)
     })

     const formatDate = (param) =>{
            const simple_date = new Date(param)
            const simplified = simple_date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            
            return simplified
     }
     const extractSimpleString = (param) =>{
           const slicedStr = param.slice(43, 240)
           return parse(slicedStr)
     }
  return (
    <div className='blog-list-section'>
          <div className="bg-lines">
                         <div className="bg-lines-outside">
                               <div className="bg-lines-inside"></div>
                         </div>
                   </div>
           <div className="inner-row">
                   <div className="blog-list-section-content">
                           {
                              !data ? "Data stream failed" :

                              data.renessianceBlogs.map(item =>
                                    <div className="simple-blog-moja" key={item.id}>
                                             <div className="image-side">
                                                      <img src={item.mainImage.url} alt="" />
                                             </div>
                                             <div className="simple-blog-texts">
                                                      <div className="simple-blog-texts-inner">
                                                              <div className="date-time">
                                                                    <p>{formatDate(item.date)}</p>
                                                                    <span></span>
                                                                     <p>{item.readTime}</p>
                                                              </div>
                                                              <h2>{item.title}</h2>
                                                      {/* <p>{extractSimpleString(item.body.html)}...</p> */}
                                                               <NavLink to={`/article/${item.slug}`}>Read More</NavLink>
                                                      </div>
                                             </div>
                                             
                                    </div>
                                )
                           }
                   </div>
           </div>
    </div>
  )
}

export default BlogList