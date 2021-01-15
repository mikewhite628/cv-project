import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

const ExperienceInfo = ({ experiences, removeExperience, isEditing }) => {
    return (
        <div>
            {experiences.map((experience, index) => (
                <div key={ index }>
                    <div>
                              {experience.company}
                    </div>
                    <div>
                        <div> {experience.role}</div>
                        <div> {experience.start} - {experience.end}</div>
                    </div>
                    <div>
                        {isEditing ? (
                            <button 
                            className='experience-remove'
                            onClick={()=> removeExperience(index)}
                            >
                                <BsTrash />
                            </button>
                        ) : null}
                    </div>
                </div>
            ))}
            {experiences.length === 0 ? 'No Work Experience Added Yet!' : null}
        </div>
    );
}

export default ExperienceInfo