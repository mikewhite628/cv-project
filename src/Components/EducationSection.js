import React, {Component, useState} from 'react'
import { BsPencil, BsX } from 'react-icons/bs';
import EducationForm from './Education/EducationForm';
import EducationInfo from './Education/EducationInfo';

const EducationSection = () => {
    const [isEditing, setEditing] = useState(false);
    const [educations, updateEducation] = useState([]);

    const toggleEditing = () => {
        setEditing(!isEditing)
    }

    const addEducation = (entry) => {
        let newEducation = [...educations];
        newEducation.push(entry)
        updateEducation(newEducation)
    }

    const removeEducation = (index) => {
        let newEducation = [...educations]
        newEducation.splice(index, 1)
        updateEducation(newEducation)
    }

    return (
        <div className='education-section'>
            <h2> Education </h2>
            {isEditing ? (
                <button
                className='education-btn'
                onClick={toggleEditing}
                >
                    <BsX />
                </button>
            ) : (
                <button 
                className='education-btn'
                onClick={toggleEditing}
                >
                    <BsPencil />
                </button>
            )}
            {isEditing ? <EducationForm addEducation={addEducation} /> : null}
            <EducationInfo educations={educations} removeSchools={removeEducation} isEditing={isEditing} />
        </div>
    )
}

export default EducationSection