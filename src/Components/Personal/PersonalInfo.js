import {useState, useEffect} from 'react'
import PersonalForm from './PersonalForm'

const PersonalInfo = ({name, position, address, email, phone, github}) => {


  return (
    <div>
      <h1>{name || 'name'}</h1>
      <h2>{ position || 'Current Position'}</h2>
      <ul>
        <li>{ address || 'address' } </li>
        <li>{ email || 'email' } </li>
        <li>{ phone || 'Phone' }</li>
        <li>{ github || 'Github' } </li>

      </ul>
    </div>
)
}



export default PersonalInfo