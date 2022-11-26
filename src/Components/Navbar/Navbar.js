import React, { useState } from 'react';
import Menu from '../../Assets/Menu.png';
import ReactDropdown from 'react-dropdown';
import './Navbar.css';

const Navbar = () => {

    // Set menu display and display menu options
    const scrollValues = [0, 1000, 2900, 4775, 7400, 8600, 9550];
    const [menu, setMenu] = useState(false);
    const options = [
        'Home', 
        'About', 
        'Education', 
        'Experience', 
        'Projects', 
        'Skillset', 
        'Contact Me'
    ];

    const HandleMenu = (e) => {
        const { checked } = e.target;
        if (checked) {
            setMenu(false);
        } else if (!checked) {
            setMenu(true);
        }
    };

    const HandleNavigation = (e, scrollValue) => {
        e.preventDefault();
        window.scrollTo({
            top: scrollValue,
            behavior: 'smooth'
        });
        setMenu(false);
    }

    return (
        <>
        <div id ='sticky' className='navbar'>
            <div className='navbar-content'>
                <h3>JORDAN FRASER</h3>
                <div className='navbar-menu'>
                    <h3 id='menu-text'>MENU</h3>
                    <button className='navbar-btn'>
                        <img
                            style={{ margin: '0', padding: '0' }}
                            checked={menu}
                            src={Menu} 
                            alt='Menu' 
                            onClick={e => HandleMenu(e)} />
                    </button>
                </div>
            </div>
        </div>
        {menu ? 
            <div checked={menu} className={`navbar-btn-menu-background`}>
                <div checked={menu} className={`navbar-menu-contents`}>
                    {options.map((entry, index) => 
                    <>
                        <button className='navbar-menu-option' onClick={e => HandleNavigation(e, scrollValues[index])}>
                            {/* <div id='nav-divider' /> */}
                            {entry}
                        </button>
                        </>
                    )}                 
                </div>
            </div> : 
        null}


        </>
    );
};

export default Navbar