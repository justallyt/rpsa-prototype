import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import SingleService from "./pages/SingleService"
import Projects from "./pages/Projects"
import SingleProject from "./pages/SingleProject"
import Type from "./pages/Type"
import Articles from "./pages/Articles"
import SingleArticle from "./pages/SingleArticle"
import Contact from "./pages/Contact"

function App() {
  const locator = useLocation()

  useEffect(()=>{
        window.scrollTo(0,0)
  }, [locator])
  return (
     <>
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/services" element={<Services />} />
               <Route path="/services/:id" element={<SingleService />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/project/:id" element={<SingleProject />} />
               <Route path="/project/type/:id" element={<Type />} />
               <Route path="/articles" element={<Articles />} />
               <Route path="/article/:id" element={<SingleArticle />} />
               <Route path="/contact" element={<Contact />} />
          </Routes>
     </>
  )
}

export default App
