import React from 'react'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'

import './dist/main.css'

function App() {
  return (
    <div >
      <Header />
      <Sidebar />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
