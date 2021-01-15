import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';


const ExperienceForm = ({ addExperience }) => {
    let [company, setCompany] = useState();
    let [start, setStart] = useState();
    let [end, setEnd] = useState();
    let [role, setRole] = useState()
    return (
       <form
       onSubmit={(e) => {
           e.preventDefault();
           e.target.reset();
           addExperience({ company, start, end, role })
       }} 
       >
           <button type='submit' className='experience-submit'>
               
               <BsPlus />
           </button>

       <div>
           <TextField
            onChange={(e) => setCompany(e.target.value)}
            label='Company'
            variant='outlined'
            required
            />

            <TextField
            onChange={(e) => setRole(e.target.value)}
            label='Role'
            variant='outlined'
            required
            />

            <TextField 
            onChange={(e) => setStart(e.target.value)}
            label='Year Started'
            variant='outlined'
            required
            />

            <TextField
            onChange={(e) => setEnd(e.target.value)}
            label='Year Ended'
            variant='outlined'
            required
            />
       </div>
       </form>
    )
}

export default ExperienceForm