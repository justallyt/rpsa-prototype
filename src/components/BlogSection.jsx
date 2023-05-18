import React from 'react'
import { articles } from '../data/articles'
import { NavLink } from 'react-router-dom'
import { request, gql } from "graphql-request"
import { useQuery } from 'react-query'

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
           }
       }     
`

const BlogSection = () => {

  const { data } = useQuery("launch", () =>{
         return request(endpoint, BLOG_QUERY)
  })
  
  return (
    <div className='articles-section'>
             <div className="inner-row">
                     <div className="bg-lines">
                         <div className="bg-lines-outside black">
                                 <div className="bg-lines-inside black"></div>
                          </div>
                      </div>
                      <div className="articles-section-content">
                                <div className="articles-intro">
                                          <h1>News & Articles</h1>
                                          <p>Keep up to date with all our project news, hear topical insights and expertise from our people, see events you can attend and find out what’s happening within the practice.</p>
                                </div>
                                
                                { !data ? 
                                      "No data yet from the CMS"
                                  : 
                                  <div className="articles-section-row">
                                  { data.renessianceBlogs.map(item => 
                                       <div className="article-moja" key={item.id}>
                                                <div className="article-image">
                                                         <img src={item.mainImage.url} alt="" />
                                                </div>
                                                <div className="semi-time-date">
                                                         <p>{item.date}</p>
                                                         <span></span>
                                                         <p>{item.readTime}</p>
                                                </div>
                                                <h2>{item.title}</h2>
                                                <NavLink to={`/article/${item.slug}`}>Read More</NavLink>
                                       </div>
                                    )}
                        </div>    
                              }
                      </div>
             </div>
    </div>
  )
}

export default BlogSection