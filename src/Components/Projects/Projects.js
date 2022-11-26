import React from 'react';
import './Projects.css';
import Contact from '../Contact/Contact';

import EKG from '../../Assets/Projects/EKG.png';
import SmartClock from '../../Assets/Projects/SmartClock.png';

const Projects = () => {

    const projects = [
        {
            image: EKG,
            name: 'Mobile EKG Monitor',
            description: `A device to detect any abnormalities in the heart. 
            The user is required to do cardio to get the heart working for 
            input values. Four Electrodes are applied to specific points on the 
            user’s chest to achieve these inputs. The input readings are then 
            processed through a PCB, designed and simulated in Multisim; once 
            the signal is processed, the Raspberry Pi parses the data it is 
            given and communicates with a Kotlin based mobile app via 
            bluetooth. The mobile app continously graphs the data from the 
            device to monitor the heart when the user is actively moving. When 
            abnormalities are detected, the user is notified.`
        },
        {
            image: SmartClock,
            name: 'Smart Clock',
            description: `Worked with a team to create a Smart Clock. The user 
            could set an alarm at a specific time; every snooze that is pressed
            , the user’s light in the room would slowly start to turn on until 
            the light would become fully bright. At this point, the snooze 
            button can no longer be pressed. In addition, It could also 
            connect to the user’s Spotify and Google Calendars; that way the 
            user could have their alarm clock sync with the calendars, and the 
            alarm music be linked to a spotify song of the user’s choosing. The 
            device itself is a Raspberry Pi connected to a touch screen that 
            would display the GUI. Python being used to communicate with the 
            smart lightbulb, google calendars, and spotify. Authorization for 
            each user is saved within a Dynamo database along side the user’s 
            login credentials and preferences. The GUI was written and compiled 
            in React. Communication between the device and AWS Services was 
            done using Lambda’s and API Gateway calls.`
        }
    ];

    const ProjectItem = ({ image, name, description }) => {

        return (
            <div className='projects-item'>
                <div id='projects-img'>
                    <img id='projects-img'src={image} alt='image' />
                </div>
                <div className='projects-item-text'>
                    <h3 id='projects-item-title'>{name}</h3>
                    <p id='projects-item-desc'>{description}</p>
                </div>
            </div>
        )
    }

    return (
        <>
        <div className='projects'>
            <div id='projects-title'>
                <h3>Projects</h3>
                <div className='divider' />
                <div className='divider-2' />
            </div>
            
            {projects.map(entry => 
                <ProjectItem
                    image={entry.image}
                    name={entry.name}
                    description={entry.description}
                />
            )}
        </div>
        </>
    );
};

export default Projects;