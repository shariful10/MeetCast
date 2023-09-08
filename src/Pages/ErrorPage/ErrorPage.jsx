import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import image from '../../assets/404.json';
import Lottie from 'lottie-react';

const ErrorPage = () => {
  const { error } = useRouteError();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='max-w-lg'>
        <Lottie className='w-full' animationData={image} loop={true} />
      </div>
      <div
        className='mt-4 text-center'
        data-aos='fade-up'
        data-aos-duration='1200'
        data-aos-delay='400'
      >
        <div className=''>
          <h3 className='text-xl font-bold mb-6'>
            {error?.message}
          </h3>
          <Link
  to='/'
  className='bg-secondary hover:bg-transparent border-2 hover:border-[#1d2130] duration-500 spacing-2 w-2/12 md:w-1/12 px-3 py-2 md:py-3 rounded-md me-2 hover:rounded-md font-medium md:font-semibold font-NotoSans text-white hover:text-[#1d2130]'
>
  Go to homepage
</Link>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
