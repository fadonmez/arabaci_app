import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='flex-col flex h-screen items-center gap-2 justify-center  '>
      <h1 className='text-4xl text-red-500 font-semibold'>404</h1>
      <p>Page not found</p>
      <Link href='/home'>
        <Button>Main Menu</Button>
      </Link>
    </div>
  );
};

export default NotFound;
