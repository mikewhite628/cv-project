import React, {Component, useState} from 'react'
import { BsPencil, BsX } from 'react-icons/bs';
import ExperienceForm from './Experience/ExperienceForm';
import ExperienceInfo from './Experience/ExperienceInfo';


const ExperienceSection = () => {

    const [isEditing, setEditing] = useState(false);
    const [experiences, updateExperience] = useState([]);


    const toggleEditing = () => {
        setEditing(!isEditing)
    }

    const addExperience = (entry) => {
        let newExperience = [...experiences];
        newExperience.push(entry)
        updateExperience(newExperience)
    }

    const removeExperience = (index) => {
        let newExperience = [...experiences];
        newExperience.splice(index, 1);
        updateExperience(newExperience)
    }

    return (
        <div className='experience-section'>
            <h2> Work Experience </h2>
            {isEditing ? (
                <button
                className='experience-btn'
                onClick={toggleEditing}
                >
                    <BsX />
                </button>

            ) : (
                <button
                className='experience-btn'
                onClick={toggleEditing}
                >
                    <BsPencil />
                </button>
            )}
            {isEditing ? <ExperienceForm addExperience={addExperience} /> : null}
            <ExperienceInfo experiences={experiences} removeExperience={removeExperience} isEditing={isEditing} />
        </div>
    )
}


export default ExperienceSection