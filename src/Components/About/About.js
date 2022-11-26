import React from 'react';
import './About.css';

import Experience from '../Experience/Experience';
import AboutDivider from '../../Assets/AboutDivider.png';
import AboutPhoto from '../../Assets/AboutPhoto.png';
import Arrow from '../../Assets/Arrow.png';
import Bubbles from '../../Assets/Bubbles.png';

const About = () => {

    return (
        // <div style={{ backgroundImage:`url(${AboutDivider})`, repeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='about'>
            <div className='about-container'>
                <div className='about-container-gradient'>
                    <div className='about-container-row'>
                        <img id='about-photo' src={AboutPhoto} alt='AboutPhoto'></img>
                        <div className='about-bio'>
                            <div className='about-title'>
                                <h3>ABOUT</h3>
                                <img id='arrow' src={Arrow} alt='arrow' />
                                {/* <div id='about-divider' /> */}
                            </div>
                            <p>
                                I am a Computer Engineer based out in the rainy state of Seattle, WA. 
                                I have always been fascinated with Computers and circuitry, ever since I was a child. 
                                I would ponder on how it all worked and how the hardware would communicate with one another 
                                and how it would even know what do. This led me to pursue a career in Computer Engineering. 
                                I live my childhood dream everyday, learning new things everyday. 
                            </p>
                            <p>
                                Although my profession is in Computer Engineering, I am not limited to it. 
                                I also posses experience and knowledge in other fields of Software Development such as, 
                                UI/UX Design, Cloud Computing, Web Development, Game Development, 2D Digital Art, and many more!
                            </p>
                            <p>
                                My love for engineering is clear, but I do have a life outside of it.
                                Another loved activity of mine is Swimming. It is my prefferred physical activity and I 
                                enjoy every minute of it even swimming professional for WA State back in High School. Nowadays, 
                                I only do it for fun and exercise and don’t plan on letting up anytime soon.
                            </p>
                        </div>
                    </div>
                    <img id='bubbles' src={Bubbles} alt='Bubbles' />
                </div>
                {/* <Experience /> */}
                
            </div>
        </div>
        // </div>
    );
};

export default About;