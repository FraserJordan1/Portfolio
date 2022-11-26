import React from 'react';
import './Skillset.css';
import SkillsetBackground from '../../Assets/SkillsetBackground.png';
import Projects from '../Projects/Projects';

// Import Skill logos
import Multisim from '../../Assets/Skillset/Multisim.png';
import MATLAB from '../../Assets/Skillset/MATLAB.png';
import Cpp from '../../Assets/Skillset/C++.png';
import Cs from '../../Assets/Skillset/C#.png';
import x86 from '../../Assets/Skillset/x86.png';
import Python from '../../Assets/Skillset/Python.png';
import Kubernetes from '../../Assets/Skillset/Kubernetes.png';
import DynamoDb from '../../Assets/Skillset/DynamoDb.png';
import Java from '../../Assets/Skillset/Java.png';
import Javascript from '../../Assets/Skillset/Javascript.png';
import NodeJs from '../../Assets/Skillset/NodeJs.png';
import HTML from '../../Assets/Skillset/HTML.png';
import CSS from '../../Assets/Skillset/CSS.png';
import Ruby from '../../Assets/Skillset/Ruby.png';
import Docker from '../../Assets/Skillset/Docker.png';
import Arduino from '../../Assets/Skillset/Arduino.png';
import REACT from '../../Assets/Skillset/React.png';
import C from '../../Assets/Skillset/C.png';
import RaspberryPi from '../../Assets/Skillset/RaspberryPi.png';
import Git from '../../Assets/Skillset/Git.png';
import EC2 from '../../Assets/Skillset/EC2.png';
import VHDL from '../../Assets/Skillset/VHDL.png';
import Kinesis from '../../Assets/Skillset/Kinesis.png';
import ApiGateyway from '../../Assets/Skillset/ApiGateway.png';
import SQL from '../../Assets/Skillset/SQL.png';
import AWS from '../../Assets/Skillset/AWS.png';
import MongoDb from '../../Assets/Skillset/MongoDb.png';
import Terraform from '../../Assets/Skillset/Terraform.png';
import Lambda from '../../Assets/Skillset/Lambda.png';
import Autodesk from '../../Assets/Skillset/Autodesk.png';

const Skillset = () => {

    const css = `@media (max-width: 650px) {
        .backimage {
            background-image: url("https://picsum.photos/200/300")
        }
    }`
    const imageUrl = window.innerWidth >= 800 ? SkillsetBackground : 'null';

    const skills_1 = [
        {
            name: 'x86',
            logo: x86
        },
        {
            name: 'C',
            logo: C
        },
        {
            name: 'C++',
            logo: Cpp
        },
        {
            name: 'C#',
            logo: Cs
        },
        {
            name: 'Java',
            logo: Java
        },
        {
            name: 'MATLAB',
            logo: MATLAB
        },
        {
            name: 'Python',
            logo: Python
        },
        {
            name: 'Ruby',
            logo: Ruby
        },
        {
            name: 'VHDL',
            logo: VHDL
        },
        {
            name: 'SQL',
            logo: SQL
        }
    ];

    const skills_2 = [
        {
            name: 'HTML',
            logo: HTML
        },
        {
            name: 'CSS',
            logo: CSS
        },
        {
            name: 'Javascript',
            logo: Javascript
        },
        {
            name: 'React',
            logo: REACT
        },
        {
            name: 'NodeJs',
            logo: NodeJs
        },
        {
            name: 'MongoDb',
            logo: MongoDb
        },
        {
            name: 'Terraform',
            logo: Terraform
        },
        {
            name: 'Docker',
            logo: Docker
        },
        {
            name: 'Kubernetes',
            logo: Kubernetes
        },
        {
            name: 'Git',
            logo: Git
        }
    ];

    const skills_3 = [
        {
            name: 'AWS',
            logo: AWS
        },
        {
            name: 'Lambda',
            logo: Lambda
        },
        {
            name: 'API Gateway',
            logo: ApiGateyway
        },
        {
            name: 'Kinesis',
            logo: Kinesis
        },
        {
            name: 'EC2',
            logo: EC2
        },
        {
            name: 'DynamoDb',
            logo: DynamoDb
        },
        {
            name: 'Multisim',
            logo: Multisim
        },
        {
            name: 'Autodesk',
            logo: Autodesk
        },
        {
            name: 'Raspberry Pi',
            logo: RaspberryPi
        },
        {
            name: 'Arduino',
            logo: Arduino
        }
    ];

    const SkillItem = ({ name, logo }) => {

        return (
            <div className='skillset-item'>
                <h3 id='skillset-item-name'>{name}</h3>
                <div id='skillset-item-logo'>
                    <img src={logo} alt='logo' />
                </div>
            </div>
        );
    };

    return (
        <>
        <div 
            className='skillset' 
            style={{ 
                backgroundImage: window.innerWidth >= 800 
                ? `url(${SkillsetBackground})` : 'none'
            }}>
            <div className='skillset-container'>
                <div id='skillset-title'>
                    <h3>Skillset</h3>
                    <div className='divider' />
                    <div className='divider-2' />
                </div>

                <h3 id='skillset-desc'>
                Languages, Databases, Tools, {'&'} Frameworks
                </h3>
                <div className='skillset-row'>
                    {skills_1.map(entry => 
                        <SkillItem 
                            name={entry.name} 
                            logo={entry.logo} 
                        />
                    )}
                </div>
                <div className='skillset-row'>
                    {skills_2.map(entry =>
                        <SkillItem 
                            name={entry.name}
                            logo={entry.logo}
                        />
                    )}
                </div>
                <div className='skillset-row'>
                    {skills_3.map(entry =>
                        <SkillItem
                            name={entry.name}
                            logo={entry.logo}
                        />
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default Skillset;