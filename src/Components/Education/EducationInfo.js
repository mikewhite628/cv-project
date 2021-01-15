import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';


const EducationInfo = ({educations, removeSchools, isEditing }) => {

    return (
        <div>
            {educations.map((education, index) => (
                <div key={ index }>
                    <div>
                        {education.school}
                    </div>
                    <div>
                        <div> {education.degree} </div>
                        <div> {education.start} - {education.end} </div>
                    </div>
                    <div>
                        {isEditing ? (
                            <button
                            className='education-remove'
                            onClick={() => removeSchools(index)}
                            >
                                <BsTrash />
                            </button>
                        ) : null }
                    </div>
                </div>
            ))}
            {educations.length === 0 ? 'No Education Added Yet!' : null}
        </div>
    )
}

export default EducationInfo