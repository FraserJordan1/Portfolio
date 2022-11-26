import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Bottom from '../Bottom/Bottom';

const Contact = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);
    const [sending, setSending] = useState(false);
    const [displayMessage, setDisplayMessage] = useState('')

    useEffect(() => {

    }, [sending])

    const form = useRef();

    const SendEmail = (e) => {
        e.preventDefault();
        setDisplayMessage('Sending Email...');
        emailjs.sendForm('service_kprbbjo', 'template_idaflsf', form.current, 'ePqgoAFmAhirXHXUO')
          .then((result) => {
              setDisplayMessage('Email has been successfully sent!');
              console.log(result.text);
          }, (error) => {
              setDisplayMessage('ERROR! Email was not sent. Please try again.');
              console.log(error.text);
          });
      };

    return (
        <>
        <div className='contact'>
            <div id='contact-title'>
                <h3>Contact</h3>
                <div className='divider' />
                    <div className='divider-2' />
            </div>
            <p id='contact-desc'>Let’s chat!</p>
            <form ref={form}>
                <div className='contact-name'>
                    <div className='contact-name-bg'>
                        <h3>NAME</h3>
                    </div>
                    <input 
                        id='name-input' 
                        name='name'
                        type='text'
                        value={name}
                        placeholder='name'
                        onChange={e => setName(e.target.value)}></input>
                </div>

                <div className='contact-name'>
                    <div className='contact-name-bg'>
                        <h3>EMAIL</h3>
                    </div>
                    <input 
                        id='name-input' 
                        name='email'
                        type='text'
                        value={email}
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)}></input>
                </div>

                <div className='contact-name'>
                    <div className='contact-name-bg'>
                        <h3>MESSAGE</h3>
                    </div>
                    <textarea 
                        name='message'
                        id='name-input' 
                        type='textarea'
                        style={{height: '150px', resize: 'none'}}
                        value={message}
                        placeholder='message'
                        onChange={e => setMessage(e.target.value)}></textarea>
                </div>
            </form>
            <div>
                <button onClick={SendEmail}id='submit-btn'>
                    SEND
                </button>
            </div>
            {displayMessage}
        </div>
        <Bottom />
        </>
    );
};

export default Contact