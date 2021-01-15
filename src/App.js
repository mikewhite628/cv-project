import React, { Component } from 'react'
import Header from './header'
import './style.css'
import PersonalSection from './Components/PersonalSection'
import ExperienceSection from './Components/ExperienceSection'
import EducationSection from './Components/EducationSection'

function App () {

  return (
    <div className='main-section'>
      <Header />
      <PersonalSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  )
}


export default App