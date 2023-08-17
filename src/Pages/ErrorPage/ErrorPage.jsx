import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import image from '../../assets/images/page.jpg'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className="flex justify-center items-center ">
            <div className='relative text-center mt-4 pt-4'>

                <img className="w-screen h-screen" src={image} alt="" />

                <div className='absolute bottom-8 md:bottom-24 md:left-1/3 px-16'
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="700"
                >
                    <h1 className="text-6xl font-bold md:font-extrabold">{status}</h1>
                    <h3 className="text-3xl md:font-semibold my-4">{error?.message}</h3>
                    <Link to='/'>
                        <button className="bg-secondary w-[150px] py-3 md:py-4 rounded-full font-medium md:font-semibold font-NotoSans primary_button text-white">
                           Go to homepage
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;