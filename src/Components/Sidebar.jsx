import React, { useState } from 'react'
import { Link } from 'react-router';
import { IonIcon } from '@ionic/react';
import { mailOutline, phonePortraitOutline, calendarOutline, locationOutline, logoLinkedin, logoInstagram, logoGithub, chevronDownOutline } from 'ionicons/icons';
import phoneIcon from '../assets/phone-icon.png'
import cakeIcon from '../assets/cake-icon.png'
import LocationIcon from '../assets/location-icon.png'
import LinkedinIcon from '../assets/linkedin-icon.svg'
import './Sidebar.css'
function Sidebar() {
    const [showContacts, setShowContacts] = useState(false);

    return (
        <div className='sidebar'>
            <div className='upper-section'>
                <img className='user-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYwM33sSN7MtnLIq0k1qjhpoEtSstLE26gA&s" alt="" />
                <div className='upper-text'>
                    <h2>Yash Sharma</h2>
                    <span>Software Developer</span>
                </div>
            </div>

            <button
                className='show-contacts-btn'
                onClick={() => setShowContacts(prev => !prev)}
            >
                <span>Show Contacts</span>
                <IonIcon icon={chevronDownOutline} className={`chevron-icon ${showContacts ? 'rotated' : ''}`} />
            </button>

            <div className='separator'></div>

            <div className={`collapsible-section ${showContacts ? 'expanded' : ''}`}>
                <div className='lower-section'>
                    <div className='contacts'>
                        <div className="icon-container">
                            <IonIcon icon={mailOutline} />
                        </div>
                        <div className='micro-info'>
                            <span className='email-text'>EMAIL</span>
                            <span className='contact-info'>yash920261@gmail.com</span>
                        </div>
                    </div>
                    <div className='contacts'>
                        <div className="icon-container">
                            <IonIcon icon={phonePortraitOutline} />
                        </div>
                        <div className='micro-info'>
                            <span className='email-text'>PHONE</span>
                            <span className='contact-info'>+91 8287845107</span>
                        </div>
                    </div>
                    <div className='contacts'>
                        <div className="icon-container">
                            <IonIcon icon={calendarOutline} />
                        </div>
                        <div className='micro-info'>
                            <span className='email-text'>BIRTHDAY</span>
                            <span className='contact-info'>November 4, 2005</span>
                        </div>
                    </div>
                    <div className='contacts'>
                        <div className="icon-container">
                            <IonIcon icon={locationOutline} />
                        </div>
                        <div className='micro-info'>
                            <span className='email-text'>LOCATION</span>
                            <span className='contact-info'>Faridabad, India</span>
                        </div>
                    </div>
                </div>

                <div className="socials">
                    <Link to="https://www.linkedin.com/in/yash-sharma-4172aa285" target='_blank'><IonIcon icon={logoLinkedin} /></Link>
                    <Link to="https://github.com/yash920261" target='_blank'><IonIcon icon={logoGithub} /></Link>
                    <Link to="https://www.instagram.com/yashhh_7243?igsh=MW8ydW9vY2JtY2t6NA==" target='_blank'><IonIcon icon={logoInstagram} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar