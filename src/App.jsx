import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Programs/>
      <About/>
      <Contact/>

    </div>
  )
}

export default App
