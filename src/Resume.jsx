import React from 'react'
import './Resume.css'
import Underline from './Components/Underline'
import { bookOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'

function Resume() {
    return (
        <>
            <div className='heading'>
                Resume
            </div>
            <Underline />

            <div className='sub-heading'>
                <div className="icon-container">
                    <IonIcon icon={bookOutline} />
                </div>
                <p>Education</p>
            </div>

            <ol className='education'>
                <li className='education-item'>
                    <div className='ed-field'>
                        <p className='ed-header'>Manav Rachna International Institute of Research & Studies</p>
                        <p className='ed-time'>2023 — 2027</p>
                        <p className='ed-detail'>Currently pursuing Bachelor of Technology in Computer Science Engineering with a CGPA of 8.6, focusing on full-stack development, data structures, and emerging technologies like blockchain.</p>
                    </div>
                </li>
                <li className='education-item'>
                    <div className='ed-field'>
                        <p className='ed-header'>Senior Secondary (Class XII) – CBSE</p>
                        <p className='ed-time'>2022 — 2023</p>
                        <p className='ed-detail'>Completed higher secondary education with 88%, building a strong foundation in mathematics, problem-solving, and computer science fundamentals.</p>
                    </div>
                </li>
                <li className='education-item'>
                    <div className='ed-field'>
                        <p className='ed-header'>Secondary (Class X) – CBSE</p>
                        <p className='ed-time'>2020 — 2021</p>
                        <p className='ed-detail'>Completed secondary education with 89%, developing analytical thinking and core academic fundamentals.</p>
                    </div>
                </li>

            </ol>


            <div className='sub-heading'>
                <div className="icon-container">
                    <IonIcon icon={bookOutline} />
                </div>
                <p>Experience</p>
            </div>

            <ol className='education'>
                <li className='education-item work-exp'>
                    <div className='ed-field'>
                        <p className='ed-header'>Full Stack Developer Intern – Academy of Skill Development</p>
                        <p className='ed-time'>June 2024 — July 2024</p>
                        <p className='ed-detail'>Worked on building full-stack web applications using the MERN stack. Developed responsive user interfaces with React.js and implemented backend logic using Node.js and Express. Gained hands-on experience with RESTful APIs, database design using MongoDB, and version control using Git and GitHub.</p>
                    </div>
                </li>


            </ol>


            <div className='sub-heading'>
                My Skills
            </div>
            <ul className='skills'>
                <li className='skill-item'>
                    <p >Frontend Dev (React, HTML, CSS) <span>85%</span></p>
                    <div className='progress-bar'>
                        <div className="progress" style={{ width: "85%" }}></div>
                    </div>
                </li>
                <li className='skill-item'>
                    <p >Backend Dev (Node, Python) <span>60%</span></p>
                    <div className='progress-bar'>
                        <div className="progress" style={{ width: "60%" }}></div>
                    </div>
                </li>
                <li className='skill-item'>
                    <p >Programming (C++, JavaScript) <span>80%</span></p>
                    <div className='progress-bar'>
                        <div className="progress" style={{ width: "80%" }}></div>
                    </div>
                </li>
                <li className='skill-item'>
                    <p >Blockchain & Web3 <span>50%</span></p>
                    <div className='progress-bar'>
                        <div className="progress" style={{ width: "50%" }}></div>
                    </div>
                </li>
                <li className='skill-item'>
                    <p >Data Structures & Problem Solving <span>70%</span></p>
                    <div className='progress-bar'>
                        <div className="progress" style={{ width: "70%" }}></div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Resume