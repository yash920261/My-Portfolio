import React from 'react'
import Underline from './Components/Underline'
import './Contact.css'
import { paperPlaneOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
function Contact() {
    return (
        <>
            <div className='heading'>
                Contact
            </div>
            <Underline />
            <div className="map-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224611.59876942573!2d77.15426124059371!3d28.40246849889499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe4f50576c850e0f2!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1776484677964!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, margin: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-form">
                <div className='sub-heading contact-form-title'>Contact Form</div>
                <div className='sender-info'>
                    <input type="text" placeholder='Full Name' />
                    <input type="email" placeholder='Email' />
                </div>
                <div className='sender-info'>
                    <textarea name="" id=""></textarea>
                </div>

                <div className='btn-container'>
                    <button className='send-msg-btn'>
                        <IonIcon icon={paperPlaneOutline} />
                        Send message
                    </button>
                </div>
            </div>
        </>
    )
}

export default Contact