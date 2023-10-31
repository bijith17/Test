import React from 'react'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Testimonial from './Components/Testimonial/Testimonial'

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Banner/>
      <About/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App