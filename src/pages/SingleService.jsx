import React from 'react'
import SingleServiceIntro from '../components/SingleServiceIntro'
import { expertise } from '../data/expertise'
import { useParams } from 'react-router-dom'
import AboutService from '../components/AboutService'
import Testimonials from "../components/Testimonials"
import ServiceContact from '../components/ServiceContact'
import Footer from "../components/Footer"

const SingleService = () => {
  const param = useParams()

  const data = expertise.find(item => item.url === param.id)
  
  return (
    <>
            <SingleServiceIntro item={data} />
            <AboutService item={data} />
            <Testimonials />
            <ServiceContact />
            <Footer />
    </>
  )
}

export default SingleService