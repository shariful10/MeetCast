import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';


import './Contact.css'

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_3ytmgs7',
            'template_70g2efs',
            form.current,
            '20lU8cjsUmR77TPiI'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='my-14'>
            <h2 className='text-center text-5xl font-bold my-24'>Get in touch with us</h2>
            <div className='contact-section py-12 md:flex justify-between items-center'>

                <div className='mx-8'>
                    <div className='my-8'>
                        <h4 className=' text-xl font-semibold'>Drop us a message</h4>
                        <p>will you get back to you as soon as possible</p>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>

                        <div className='flex justify-between w-full'>
                            <input className='my-2 p-2' type="text" placeholder='Full Name' name="user_name" /><br />
                            <input className='my-2 mx-3 p-2' type="text" placeholder='Company Name' name="company" /><br />
                        </div>

                        <input className='w-full my-2 p-2' type="email" placeholder='Work Email' name="user_email" /><br />

                        <input className='w-full my-2 p-2' type="text" placeholder='Subject' name="subject" /><br />

                        <textarea className='w-full my-2 p-2' placeholder='Message' name="message" /><br />
                        <input className='w-full my-2 p-2 bg-black text-white' type="submit" value="Send" />
                    </form>
                </div>

                <div className='contact-details mx-8'>
                    <h4 className='flex items-center'><FaPhoneAlt className='bg-indigo-500 text-white w-12 h-12 rounded-full mr-4 p-3'></FaPhoneAlt> +88 01518-726852</h4>
                    <p>Free support</p>
                    <h4 className='flex items-center'><MdOutlineEmail className='bg-indigo-500 text-white w-12 h-12 rounded-full mr-4 p-3'></MdOutlineEmail>Shariful: skshariful10@gmail.com</h4>
                    <p>Help email support</p>
                    <h4 className='flex items-center'><MdOutlineEmail className='bg-indigo-500 text-white w-12 h-12 rounded-full mr-4 p-3'></MdOutlineEmail>antora.taslima97@gmail.com</h4>
                    <p>Seals Enquiry</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;