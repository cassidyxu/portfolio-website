import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss'
import Navbar from '../../components/Navbar/Navbar';

const Contact = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_4vljv3g', 'template_kelt3of', form.current, 'p0l_j0JIxQRnYMlcK')
                .then((result) => {
                    console.log('Email sent successfully:', result.text);
                    toast.success('Email sent successfully', { position: toast.POSITION.TOP_RIGHT });

                    if (form.current) {
                        form.current.reset();
                    }
                })
                .catch((error) => {
                    console.error('Error sending email:', error.text)
                    toast.error('Error sending email. Please try again.', { position: toast.POSITION.TOP_RIGHT });
                });
        } else {
            console.error('Form reference is undefined.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="contact-page p-12 pt-24 flex justify-center items-center">
                <form ref={form as React.MutableRefObject<HTMLFormElement>} onSubmit={sendEmail} className="w-full md:w-3/4">
                    <div className="flex flex-col justify-center items-center">
                        <div className="container flex flex-col">
                            <label>Name</label>
                            <input type="text" name="from_name" />
                        </div>
                        <div className="container flex flex-col mt-4">
                            <label>Email</label>
                            <input type="email" name="from_email" />
                        </div>
                        <div className="container message-box flex flex-col mt-4">
                            <label>Message</label>
                            <textarea name="message" />
                        </div>
                        <motion.div
                            className="submit-button w-1/2 mt-4 mt-8 rounded-full"
                            whileHover={{ backgroundColor: '#578eba' }}
                        >
                            <input type="submit" value="Send" className='send' />
                        </motion.div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact