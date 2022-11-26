import React from 'react';
import './Education.css';
import Skillset from '../Skillset/Skillset';
import EducationBackground from '../../Assets/EducationBackground.png';
import SU from '../../Assets/SU.png';
import UW from '../../Assets/UW.png';

const Education = () => {

    const schools = [
        {
            school: 'Seattle University',
            logo: SU,
            degree: 'Bachelor\’s of Science in Electrical Engineer',
            attended: '2018 - 2020'
        },
        {
            school: 'University of Washington',
            logo: UW,
            degree: 'Master\’s of Science in Computer Engineer',
            attended: '2020 - 2023'
        }
    ];

    const SchoolItem = ({ school, logo, degree, attended }) => {

        return (
            <div className='education-item'>
                <h3>{school}</h3>
                <div id='education-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <h3>{degree}</h3>
                <h3>{attended}</h3>
            </div> 
        );
    };

    return (
        <>
        {/* <img id='education-bg' src={EducationBackground} alt='education-bg' /> */}
        <div className='education' >
            <div id='education-title'>
                <h3>Education</h3>
                <div className='divider' />
                <div className='divider-2' />
            </div>
            <p id='education-desc'>
               I first attended Bellevue College to complete my 
               prerequisite courses at a discounted price. Once finished, I 
               transferred to Seattle University to retrieve Bachelor’s degree 
               and after sometime, I succeeded in finishing my undergraduate 
               program. However, that is not where my education journey ended. 
               I had received an acceptance letter from the University of 
               Washington, allowing me to pursue my masters degree expecting 
               to graduate come August 2023. In addition, all of my courses 
               are at night, allowing me to also work professionally.
            </p>
            <div className='education-row'>
                {schools.map(entry => 
                    <SchoolItem
                        school={entry.school}
                        logo={entry.logo}
                        degree={entry.degree}
                        attended={entry.attended}
                    />
                )}
            </div>
        </div>
        </>
    );
};

export default Education;