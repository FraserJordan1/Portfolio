import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';

import About from '../About/About';
import HomeBackground from '../../Assets/HomeBackground.png';
import AboutDivider from '../../Assets/AboutDivider.png';

const Home = () => {

    return (
        <>
        <div 
            className='home' 
            style={{ backgroundImage:`url(${HomeBackground})` }}>
            <div className='home-title'>
                <h3 id='name-spacing'>JORDAN FRASER</h3>
                <h3 id='home-title'>COMPUTER ENGINEER</h3>
            </div>
            <img src={AboutDivider} alt='about' style={{ height: '30rem', width: '100vw', repeat: 'no-repeat', backgroundSize: 'cover' }}/>
            {/* <About /> */}
        </div>
        </>
    );
};

export default Home;