import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss'
import Navbar from '../../components/Navbar/Navbar';
import penguin from '../../assets/images/penguin2.png'

const Contact = () => {

    const form = useRef<HTMLFormElement>(null);
    const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {

            const formData = new FormData(form.current);
            let isValid = true;

            formData.forEach((value) => {
                if (!value) {
                    isValid = false;
                    return;
                }
            });

            if (!isValid) {
                toast.error('Please fill in all fields.', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
                return;
            }

            emailjs.sendForm('service_4vljv3g', 'template_kelt3of', form.current, apiKey)
                .then((result) => {
                    console.log('Email sent successfully:', result.text);
                    toast.success('Email sent successfully', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    });

                    if (form.current) {
                        form.current.reset();
                    }
                })
                .catch((error) => {
                    console.error('Error sending email:', error.text)
                    toast.error('Error sending email. Please try again.', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    });
                });
        } else {
            console.error('Form reference is undefined.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="contact-page p-12 h-screen flex flex-col justify-center items-center">
                <img src={penguin} className="h-32" />
                <h1 className="mb-4">Contact me using the form below!</h1>
                <form ref={form as React.MutableRefObject<HTMLFormElement>} onSubmit={sendEmail} className="w-full md:w-3/4">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col md:flex-row">
                            <div className="container flex flex-col mt-4">
                                <label>Name</label>
                                <input type="text" name="from_name" />
                            </div>
                            <div className="container flex flex-col mt-4 md:ml-6">
                                <label>Email</label>
                                <input type="email" name="from_email" />
                            </div>
                        </div>
                        <div className="flex flex-col mt-4 w-300 md:w-624">
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