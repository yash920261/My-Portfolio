import React from 'react'
import './About.css'
import WebdevIcon from './assets/webdev-icon.png'
import StudentIcon from './assets/student-icon.png'
import SolidityIcon from './assets/solidity-icon.png'
import { rocketOutline } from 'ionicons/icons'
import Underline from './Components/Underline'
import { IonIcon } from '@ionic/react'
function About() {
    return (
        <>
            <div className='heading'>
                About Me
            </div>
            <Underline />
            <div className="my-info">
                <span>I'm a Computer Science student and full-stack developer from India, passionate about building modern web applications and blockchain-based systems. I enjoy turning complex problems into simple, efficient, and scalable solutions.
                    My work focuses on developing responsive and user-friendly web applications using React.js and Python, while also exploring decentralized technologies to build secure and transparent systems.
                    <br />
                    <br />
                    I like adding practical value to my projects by combining clean design with strong backend logic.
                    My goal is to create impactful software that not only works seamlessly but also solves real-world problems. I am continuously learning and experimenting with new technologies to improve my skills and build meaningful projects.
                </span>
            </div>

            <div className="heading">What Am I Doing</div>
            <div className='work-grid'>
                <div className='work'>
                    <div className="work-img-1">
                        <img src={StudentIcon} alt="" />
                    </div>
                    <div className='work-details'>
                        <h3>Student</h3>
                        <p>Continuously learning and exploring new technologies to improve and stay ahead.</p>
                    </div>
                </div>
                <div className='work'>
                    <div className="work-img-2">
                        <img src={WebdevIcon} alt="" />
                    </div>
                    <div className='work-details'>
                        <h3>Web Development</h3>
                        <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>
                <div className='work'>
                    <div className="work-img">
                        <img src={SolidityIcon} alt="" />
                    </div>
                    <div className='work-details'>
                        <h3>Blockchain Systems</h3>
                        <p>Building secure and transparent decentralized applications for real-world use cases.</p>
                    </div>
                </div>

                <div className='work'>
                    <div className="work-img">
                        <IonIcon className='rocket-logo' icon={rocketOutline} />
                    </div>
                    <div className='work-details'>
                        <h3>Problem Solving</h3>
                        <p>Solving complex problems using efficient algorithms and optimized data structures.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About