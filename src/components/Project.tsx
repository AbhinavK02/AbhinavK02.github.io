import React from "react";
import LightWorksheetGenerator from '../assets/images/10.png';
import LightImpostorGame from '../assets/images/9.png';
import LightVerificationator from '../assets/images/8.png';
import LightTheTalkingMailbox from '../assets/images/7.png';
import LightKnockLock from '../assets/images/6.png';
import DarkWorksheetGenerator from '../assets/images/5.png';
import DarkImpostorGame from '../assets/images/4.png';
import DarkVerificationator from '../assets/images/3.png';
import DarkTheTalkingMailbox from '../assets/images/2.png';
import DarkKnockLock from '../assets/images/1.png';
import '../assets/styles/Project.scss';

interface ProjectProps {
    mode: string;
}

function Project({ mode }: ProjectProps) {
    const KnockLock = mode === 'dark' ? DarkKnockLock : LightKnockLock;
    const TheTalkingMailbox = mode === 'dark' ? DarkTheTalkingMailbox : LightTheTalkingMailbox;
    const Verificationator = mode === 'dark' ? DarkVerificationator : LightVerificationator;
    const ImpostorGame = mode === 'dark' ? DarkImpostorGame : LightImpostorGame;
    const WorksheetGenerator = mode === 'dark' ? DarkWorksheetGenerator : LightWorksheetGenerator;
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://youtu.be/qGrgIr3oHPE" target="_blank" rel="noreferrer"><img src={KnockLock} className="zoom" alt="thumbnail" width='100%'/></a>
                <a href="https://youtu.be/qGrgIr3oHPE" target="_blank" rel="noreferrer"><h2>KnockLock</h2></a>
                <p>Made a box which can only be opened by doing a specific knock pattern. This included, the from idea definition, PCB design and assembly, embedded programming and final product deployment. The project can be seen more in detail <a href="https://github.com/AbhinavK02/KnockLock" target="_blank" rel="noreferrer">here</a> and a video demonstration <a href="https://youtu.be/qGrgIr3oHPE" target="_blank" rel="noreferrer">here</a>.</p>
            </div>
            <div className="project">
                <a href="https://www.youtube.com/watch?v=1nNW60RcUi4" target="_blank" rel="noreferrer"><img src={TheTalkingMailbox} className="zoom" alt="thumbnail" width='100%'/></a>
                <a href="https://www.youtube.com/watch?v=1nNW60RcUi4" target="_blank" rel="noreferrer"><h2>The Talking Mailbox</h2></a>
                <p>Made a smart mailbox system, which can detect a mail present, and using LoRaWAN communicate this with a gate to alert the user in case of a mail. Tampering detection was implemented using a microcontroller and a vibration sensor and light sensor. The project can be seen more in detail <a href="https://github.com/AbhinavK02/TheTalkingMailbox" target="_blank" rel="noreferrer">here</a> and a video demonstration <a href="https://www.youtube.com/watch?v=1nNW60RcUi4" target="_blank" rel="noreferrer">here</a>.</p>
            </div>
            <div className="project">
                <a href="https://github.com/jcchincheong-bb/Verificationator_GP-WS25-26" target="_blank" rel="noreferrer"><img src={Verificationator} className="zoom" alt="thumbnail" width='100%'/></a>
                <a href="https://github.com/jcchincheong-bb/Verificationator_GP-WS25-26" target="_blank" rel="noreferrer"><h2>Verificationator</h2></a>
                <p>Designed a Mobile Hardness Testing Machine Calibration Kit for the company Innovatest Europe, including its manufacturing and assembly process.</p>
            </div>
            <div className="project">
                <a href="https://github.com/AbhinavK02/ImpostorGame" target="_blank" rel="noreferrer"><img src={ImpostorGame} className="zoom" alt="thumbnail" width='100%'/></a>
                <a href="https://github.com/AbhinavK02/ImpostorGame" target="_blank" rel="noreferrer"><h2>Impostor Game</h2></a>
                <p>Developed a simple game using Python Kivvy, where in 3-6 players can play together in a shared environment. Each user gets a word, and must identify the impostor among them, who has a different word. Each player gets a turn to speak and describe their word with one word without revealing it.</p>
            </div>
            <div className="project">
                <a href="https://youtu.be/Gy1QX18h9KM" target="_blank" rel="noreferrer"><img src={WorksheetGenerator} className="zoom" alt="thumbnail" width='100%'/></a>
                <a href="https://youtu.be/Gy1QX18h9KM" target="_blank" rel="noreferrer"><h2>Worksheet Generator</h2></a>
                <p>Engineered a Java/MySQL desktop app that compiles custom question banks into worksheets, implementing role-based logic to generate answer keys exclusively for teacher accounts while allowing students to generate self-practice sheets. The project can be seen in more detail <a href="https://github.com/AbhinavK02/WorksheetGenerator" target="_blank" rel="noreferrer">here</a> and a video demonstration <a href="https://youtu.be/Gy1QX18h9KM" target="_blank" rel="noreferrer">here</a>.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;