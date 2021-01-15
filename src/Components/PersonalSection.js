import React, {Component, useState} from 'react'
import PersonalInfo from '../Components/Personal/PersonalInfo'
import PersonalForm from '../Components/Personal/PersonalForm'
import { BsPencil, BsX } from 'react-icons/bs';


const PersonalSection = () => {

    const [editOn, setEditOn] = useState(false)
    const toggleEditing = () => setEditOn(!editOn)

    const [name, setName] = useState()
    const [position, setPosition] = useState();
    const [address, setAddress] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [github, setGithub] = useState();

    const updateName = (e) => setName(e.target.value)
    const updatePosition = (e) => setPosition(e.target.value)
    const updateAddress = (e) => setAddress(e.target.value)
    const updateEmail = (e) => setEmail(e.target.value)
    const updatePhone = (e) => setPhone(e.target.value)
    const updateGithub = (e) => setGithub(e.target.value)
  


    let display 
    if (editOn)
      display = (
        <PersonalForm {...{
          name, 
          position, 
          address, 
          email, 
          phone, 
          github, 
          updateName, 
          updatePosition, 
          updateAddress,
          updateEmail,
          updatePhone,
          updateGithub
        }} />
      )

    else  
        display = <PersonalInfo {...{name, position, address, email, phone, github}}/>

        return (
          <div className="personal-section">
            {editOn ? (
              <button
                onClick={toggleEditing}
                className="personal-btn"
              >
                <BsX />
              </button>
            ) : (
              <button
                onClick={toggleEditing}
                className="personal-btn"
              >
                <BsPencil />
              </button>
            )}
      
            {display}
          </div>
        );
   }




export default PersonalSection