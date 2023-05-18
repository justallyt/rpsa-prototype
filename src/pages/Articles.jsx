import React from 'react'
import WholeNavbar  from "../components/Navigation/WholeNavbar"
import "../css/articles.css"
import BlogList from '../components/BlogList'
import SimpleNudge from "../components/SimpleNudge"
import Footer from '../components/Footer'
const Articles = () => {
  return (
    <>
         <div className="article-hero">
                 <WholeNavbar />
                 <div className="bg-lines">
                         <div className="bg-lines-outside">
                               <div className="bg-lines-inside"></div>
                         </div>
                   </div>
                 <div className="article-hero-content">
                         <div className="inner-row">
                                 <div className="article-intro-texts">
                                         <h1>News & Articles</h1>
                                         <p>Keep up to date with all our project news, hear topical insights and expertise from our people, see events you can attend and find out what’s happening within the practice.</p>
                                 </div>
                         </div>
                 </div>
         </div>
         <BlogList />
         <SimpleNudge />
         <Footer />
    </>
  )
}

export default Articles