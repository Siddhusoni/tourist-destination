import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Aboutimg from '../assets/night.jpg'
import Footer from '../components/footer/Footer'
import Trip from '../components/trip/Trip'
const Services = () => {
  return (
    <>
    <Navbar/>

    <Hero
      
      cName='hero-mid'
      heroImg={Aboutimg}
       title='Services'
       btnClass='hide'
      />

      <Trip/>
      <Footer/>
    
    </>
  )
}

export default Services
