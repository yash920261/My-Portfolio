import React, { useState } from 'react'
import Underline from './Components/Underline'
import './Contact.css'
import { paperPlaneOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import emailjs from '@emailjs/browser';
function Contact() {
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [msg, setMsg] = useState('');
    const [msgErr, setMsgErr] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);

    }

    const handleEmail = (e) => {
        setEmail(e.target.value);

    }

    const handleMsg = (e) => {
        setMsg(e.target.value);

    }


    const sendEmail = async () => {

        const templateParams = {
            user_name: name,
            user_email: email,
            message: msg,
        };

        await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_PUBLIC_KEY
        );


    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && email && msg) {
            try {
                setLoading(true);

                await sendEmail();

                setNameErr(false);
                setEmailErr(false);
                setMsgErr(false);

                alert('Message sent successfully!');
            } catch (err) {
                console.log(err);
                alert("Failed to send message ❌");
            } finally {
                setLoading(false);
            }
        } else {
            setNameErr(!name);
            setEmailErr(!email);
            setMsgErr(!msg);
        }


    }
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
                    <input value={name} onChange={(e) => {
                        handleName(e);
                    }} type="text" placeholder='Full Name' />
                    <input value={email} onChange={(e) => {
                        handleEmail(e);
                    }} type="email" placeholder='Email' />
                </div>
                <div className='sender-info'>
                    <textarea value={msg} onChange={(e) => {
                        handleMsg(e);
                    }} name="" id=""></textarea>
                </div>
                {
                    nameErr ? <p>Enter name properly</p> :
                        emailErr ? <p>Enter email properly</p> :
                            msgErr ? <p>Enter a valid message</p> : null
                }

                <div className='btn-container'>
                    <button disabled={loading} onClick={handleSubmit} className='send-msg-btn'>
                        {
                            loading ? <div className="loader"></div> :
                                <>
                                    <IonIcon icon={paperPlaneOutline} />
                                    Send message
                                </>
                        }

                    </button>
                </div>
            </div>

        </>
    )
}

export default Contact