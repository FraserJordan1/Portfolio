import React from 'react';
import './Experience.css';
import Castus from '../../Assets/CASTUS.png';
import Lubn from '../../Assets/Lubn.png';
import Seabird from '../../Assets/Seabird.png';
import Overcast from '../../Assets/Overcast.png';
import Education from '../Education/Education';
import EducationBackground from '../../Assets/EducationBackground.png';

const Experience = () => {

    const jobs = [
        {
            logo: Castus,
            company: 'CASTUS Corporation',
            title: 'Lead Software Engineer',
            description: [
                `Incorporated a bandwidth and data cap for all clients\’ based on their respective tier package. 
                This data cap would primarily be used for Live Streaming, Closed Captioning, RTMP Streaming, and 
                managing view counts.`,
                `Worked and led a team to program and configure Video Encoding devices that would allow clients\’ 
                to stream their content via RTMP. This encoding device was also configured to support closed captioning.`,
                `Worked with a team on creating custom made video applications for Over The Top Platforms such as, Roku, 
                Amazon Fire Stick, and Apple TV. Every client would have their very own Video On Demand Channel that were 
                each published individually, showcasing their content.`,
                `Partnered with another Engineer to create and design a mobile application. This allowed our clients\’ to 
                showcase their Video On Demand Channel on their very own mobile application. The clients\’ could also sync 
                up their google calendars for content scheduling. support on Android and iOS.`,
                `Implemented a PDF reader specifically designed to set up new clients’ admin portal based on their Purchase 
                Orders. The PDF would scan what services were purchased and if they finalized payment. Once scanned, and 
                payment is finalized, the users’ account would be created and would be ready for immediate usage.`
            ]
        },
        {
            logo: Lubn,
            company: 'Lubn Inc.',
            title: 'Software Engineer (Contract)',
            description: [
                `Worked with a team configuring a Raspberry Pi to act as a camera tracking system. Using Machine Learning Algorithms,
                the device would automatically detect any activity within a household In addition to more advanced features like 
                checking if the light’s were left on or the door was left open.`,
                `Configured Embedded Software to work in conjunction with a camera attachment as well as a motion detector. In addition, 
                creating a steady network stream to make sure that the Raspberry Pi could communicate with the cloud and live streaming.`,
                `Worked with a team to configure and build a multi-camera tracking system that implemented Machine Learning algorithms to 
                automate management tasks through a camera.`,
                `Created a mobile and web application allowing users’ to view the camera activity and be notified if any movement had occurred 
                or if anything seemed out of the ordinary.`
            ]
        },
        {
            logo: Seabird,
            company: 'Seabird Scientific',
            title: 'Production Test Engineer (Contract)',
            description: [
                `Contract work through Insight Global. Worked with a team of engineers and technicians to fully test 
                analog water quality devices, and debug any errors found.`,
                `Worked with a team to modify PCB schematics and modify devices via SPICE to see what parts could be 
                replaced or outright removed to cut down on unnecessary costs. This resulted in the company saving 
                roughly 30% on inventory costs.`,
                `Created and revised documentation and guides on assembly of water quality devices for technicians to 
                increase work proficiency and more accurate designs.`,
                `In addition to my Engineering duties, I also participated in technician work, helping with assembly 
                and configuration when staff was short or if demands were not being met.`,
                `Worked with a team in signal processing applications to make sure readings of analog devices were 
                accurate and communication between the device and the user was consistent.`
            ]
        },
        {
            logo: Overcast,
            company: 'Overcast Innovations',
            title: 'Cloud Engineer (Apprenticeship)',
            description: [
                `Unpaid Internship organized by my undergraduate program at Seattle University. Worked on a “Smart” 
                Home appliance device. A device that would communicate with appliances within a clients\’ household 
                from their phone. Various functionalities were incorporated through AWS with a Raspberry Pi used for 
                communicating with the home appliance.`,
                `A Raspberry Pi was used for communicating with AWS cloud as well as the home appliance devices including,
                but not limited to, the thermostat, Lighting, and Security System. The information stored on the Raspberry 
                Pi would then be legible through the client\’s own personalized Web and Mobile application.`,
                `Disclaimer: This section is shorter than the others due to the nature of my NDA. I reached out to the company 
                and they allowed me to disclose this much informatuion.`
            ]
        }
    ];

    const JobItem = ({ logo, company, title, description }) => {

        return (
            <div className='experience-item'>
                <div id='img-container'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='experience-item-title'>
                    <h3 id='company'>{company}</h3>
                    <h3 id='company-title'>{title}</h3>
                    <ul style={{padding: '0'}}>
                        {description.map(entry => <li id='desc'>{entry}</li>)}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <>
        <img id='work-bg' src={EducationBackground} alt='bg' />
        <div className='experience'>
            {/* <img src={EducationBackground} alt='bg' /> */}
            <div id='exp-title'>
                <h3>Work Experience</h3>
                <div className='divider-exp' />
                <div className='divider-2-exp' />
            </div>

            {jobs.map(entry =>
                <JobItem 
                    logo={entry.logo}
                    company={entry.company}
                    title={entry.title}
                    description={entry.description}
                />
            )}
        </div>
        </>
    );
};

export default Experience;