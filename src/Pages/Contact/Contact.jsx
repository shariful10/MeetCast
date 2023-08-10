import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
import Container from '../../components/Shared/Container/Container';
import Congratulation from '../../Components/Shared/Congratulation/Congratulation';


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

const notify = () => toast('successfully send your email');
return (
    <div className=' bg-gradient-to-t from-[#e5f0fd] to-[rgba(21, 21, 21, 0)]'>
        <Container>
            <div>
                <h2 className='text-center text-5xl font-bold md:mb-16 mb-8'>Get in touch with us</h2>
                <div className='contact-section bg-indigo-100 md:py-12 md:flex justify-between items-center'>

                    <div className='md:mx-8 mx-4'>
                        <div className='md:my-8'>
                            <h4 className=' text-xl font-semibold'>Drop us a message</h4>
                            <p>will you get back to you as soon as possible</p>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>

                            <div className='md:flex justify-between w-full'>
                                <input className='my-2 p-2 w-full' type="text" placeholder='Full Name' name="user_name" /><br />
                                <input className='my-2 md:mx-3 p-2 w-full' type="text" placeholder='Company Name' name="company" /><br />
                            </div>

                            <input className='w-full my-2 p-2' type="email" placeholder='Work Email' name="user_email" /><br />

                            <input className='w-full my-2 p-2' type="text" placeholder='Subject' name="subject" /><br />

                            <textarea className='w-full my-2 p-2' placeholder='Message' name="message" /><br />
                            <input onClick={notify} className='w-full my-2 p-2 bg-black text-white' type="submit" value="Send" />
                            <Toaster />
                        </form>
                    </div>

                    <div className='contact-details md:mx-8 py-4'>
                        <h4 className='flex items-center md:text-3xl font-bold'><FaPhoneAlt className='bg-indigo-500 text-white w-12 h-12 rounded-full mr-4 p-3'></FaPhoneAlt> +88 01518-726852</h4>
                        <p className='ml-16'>Free support</p>
                        <h4 className='flex items-center md:text-3xl font-bold'><MdOutlineEmail className='bg-indigo-500 text-white w-12 h-12 rounded-full mr-4 p-3'></MdOutlineEmail>skshariful10@gmail.com</h4>
                        <p className='ml-16'>Help email support</p>
                        <h4 className='flex items-center md:text-3xl font-bold'><MdOutlineEmail className='bg-indigo-500 text-white w-12 h-12 rounded-full mr-4 p-3'></MdOutlineEmail>antora.taslima97@gmail.com</h4>
                        <p className='ml-16'>Seals Enquiry</p>
                    </div>
                </div>
                <Congratulation></Congratulation>
            </div>
        </Container>
    </div>
);
    };

export default Contact;
