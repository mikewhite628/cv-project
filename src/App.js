import React, { Component } from 'react'
import Header from './header'
import './style.css'
import PersonalSection from './Components/PersonalSection'
import ExperienceSection from './Components/ExperienceSection'

function App () {

  return (
    <div>
      <Header />
      <PersonalSection />
      <ExperienceSection />
    </div>
  )
}


export default App