import {useState, useEffect} from 'react'
import PersonalForm from './PersonalForm'

const PersonalInfo = ({name, position, address, email, phone, github}) => {


  return (
    <div>
        <div>
      <h1>{name || 'Name'}</h1>
      <h2>{ position || 'Current Position'}</h2>
        </div>
        <div className='socials'>
      <ul>
        <li>{ address || 'address' } </li>
        <li>{ email || 'email' } </li>
        <li>{ phone || 'Phone' }</li>
        <li>{ github || 'Github' } </li>
      </ul>
      </div>
    </div>
)
}



export default PersonalInfo