import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import Campus from './components/Campus/Campus'
import Title from './components/Title/Title'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Footer from './components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Programs/>
      <About/>
      <Campus/>
      <Title/>
      <VideoPlayer/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
