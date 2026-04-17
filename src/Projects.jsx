import React from 'react'
import Underline from './Components/Underline'
import Project1 from './assets/project1.png'
import Project2 from './assets/project2.png'
import Project3 from './assets/project3.png'
import TiltedCard from './Components/TiltedCard';
import './Projects.css'

function Projects() {
    return (
        <>
            <div className="heading">
                Projects
            </div>
            <Underline />
            <div className="projects-grid">

                <TiltedCard
                    imageSrc={Project1}
                    altText="Project Showcase System"
                    captionText="Project Showcase System"
                    containerHeight="200px"
                    containerWidth="100%"
                    imageHeight="200px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    displayOverlayContent
                    overlayContent={
                        <p className="tilted-card-demo-text">
                            Project Showcase System
                        </p>
                    }
                />
                <TiltedCard
                    imageSrc={Project2}
                    altText="Project Showcase System"
                    captionText="Project Showcase System"
                    containerHeight="200px"
                    containerWidth="100%"
                    imageHeight="200px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    displayOverlayContent
                    overlayContent={
                        <p className="tilted-card-demo-text">
                            Decentralized Voting System
                        </p>
                    }
                />
                <TiltedCard
                    imageSrc={Project3}
                    altText="Project Showcase System"
                    captionText="Project Showcase System"
                    containerHeight="200px"
                    containerWidth="100%"
                    imageHeight="200px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    displayOverlayContent
                    overlayContent={
                        <p className="tilted-card-demo-text">
                            NPTEL Certificate Verification System
                        </p>
                    }
                />



            </div>
        </>
    )
}

export default Projects