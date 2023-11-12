import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React from 'react';

const Welcome = () => {
  return (
    <div className='flex flex-col h-screen  items-center justify-center '>
      <Navbar />
      <div className='h-full  w-full'>
        <div className='absolute bg-[url(https://images5.alphacoders.com/107/thumb-1920-1070089.jpg)] top-0 w-full h-full object-contain blur-sm'></div>
        <div className='flex z-50 flex-col items-center justify-center h-full w-full relative'>
          <h1 className='text-white text-4xl font-bold text-center '>
            Welcome to the world of Cars
          </h1>
          <Link href='/home'>
            <p className='bg-white text-black px-4 py-2 rounded-lg mt-4'>
              Go to cars
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
