import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Arduino",
    "Raspberry Pi",
    "ESP32",
    "PLC Programming",
    "PCB Design",
    "PCB Assembly",
    "Embedded Systems",
    "LoRaWAN",
    "C/C++",
    "JSON",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Python",
    "Flutter",
    "MySQL",
    "Java",
    "C/C++",
    "Kivvy",
    "Linux",
    "Docker",
];

const labelsThird = [
    "MATLAB",
    "Simulink",
    "SolidWorks",
    "3D Modelling and Assembly",
    "Engineering Drawing",
    "TwinActivate",
    "KiCAD",
    "LaTeX",
    "Slicing Software",
    "3D Printing",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Embedded Systems & IoT</h3>
                    <p>I have built multiple projects combining software and hardware, including microcontroller programming, sensor integration, and real-time data processing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills developed:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Programming and App Development</h3>
                    <p>I develop efficient software solutions across multiple platforms. From mobile apps with Flutter/Python Kivvy to backend logic in Python and C++ as well as server setups.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills developed:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Engineering & Design</h3>
                    <p>I use modern engineering tools to design and simulate hardware and software systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills developed:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;