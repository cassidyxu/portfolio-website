import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'

const Contact = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_4vljv3g', 'template_kelt3of', form.current, 'p0l_j0JIxQRnYMlcK')
                .then((result) => {
                    console.log('Email sent successfully:', result.text);
                })
                .catch((error) => {
                    console.error('Error sending email:', error.text)
                });
        } else {
            console.error('Form reference is undefined.');
        }
    };

    return (
        <div>
            {/* <h1>hi from contact</h1> */}
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="from_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact