import {useState, useEffect} from 'react'
import { TextField } from '@material-ui/core';


const PersonalForm = ({
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
}) => {

  return (
    <div>
      <form>
      <TextField
        value={name}
        onChange={updateName}
        label='Full name'
        variant='outlined'
        required
      />
      <TextField
        value={position}
        onChange={updatePosition}
        label='Current Position'
        variant='outlined'
        required
        />
      <TextField
        value={address}
        onChange={updateAddress}
        label='Address'
        variant='outlined'
        required/>
      <TextField
        value={email}
        onChange={updateEmail}
        label='email'
        variant='outlined'
        required/>
      <TextField
        value={phone}
        onChange={updatePhone}
        label='Phone'
        variant='outlined'
        required/>
      <TextField
        value={github}
        onChange={updateGithub}
        label='Github'
        variant='outlined'
        required/>
      </form>
    </div>
)
}


export default PersonalForm