import React from 'react'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

import './dist/main.css'

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
