import React from "react";
import './Bottom.css';

import Github from '../../Assets/Bottom/Github.png';
import Linkedin from '../../Assets/Bottom/Linkedin.png';
import Resume from '../../Assets/Bottom/Resume.png';
import Mail from '../../Assets/Bottom/Mail.png';
import ResumeDownload from '../../Assets/Files/Resume.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bottom = () => {

    return (
        <div className='bottom'>
            <div className='bottom-links'>
                <a href='https://github.com/FraserJordan1'>
                    <img src={Github} alt='github' />
                    <FontAwesomeIcon icon="fa-brands fa-square-github" />
                </a>
                <a href='https://www.linkedin.com/in/jordan-fraser-436685140/'>
                    <img src={Linkedin} alt='linkedin' />
                    {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
                    {/* <i class="fa-solid fa-user"></i> */}
                </a>
                <a href={ResumeDownload} download='Resume'>
                    <img id='resume' src={Resume} alt='resume' />
                </a>
                <a href='mailto:fraserj916@hotmail.com'>
                    <img id='mail' src={Mail} alt='mail' />
                </a>
                
            </div>
            <h3 style={{fontSize: '24px'}}>Copyright&copy; 2022 Jordan Fraser</h3>
        </div>
    );
};

export default Bottom;