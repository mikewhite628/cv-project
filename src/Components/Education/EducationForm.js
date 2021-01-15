import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

const EducationForm = ({ addEducation }) => {
    let [school, setSchool] = useState();
    let [degree, setDegree] = useState();
    let [start, setStart] = useState();
    let [end, setEnd] = useState();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.target.reset();
                addEducation({school, degree, start, end})
            }}
            >
                <button type='submit' className='education-submit'>
                    <BsPlus />
                </button>

                <div>
                    <TextField
                    onChange={(e) => setSchool(e.target.value)}
                    label='School'
                    variant='outlined'
                    required
                    />

                    <TextField
                    onChange={(e) => setDegree(e.target.value)}
                    label='Degree or Certifications'
                    variant='outlined'
                    required
                    />

                    <TextField
                    onChange={(e) => setStart(e.target.value)}
                    label='Year Start'
                    variant='outlined'
                    required
                    />

                    <TextField
                    onChange={(e) => setEnd(e.target.value)}
                    label='Year End' 
                    variant='outlined'
                    required
                    />

                </div>
            </form>
    )
}

export default EducationForm