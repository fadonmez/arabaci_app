import { auth } from '@/auth';
import React from 'react';
import Dropdown from './Dropdown';
import { Button } from './ui/button';
import Link from 'next/link';

const Navbar = async () => {
  const session = await auth();
  return (
    <header className='p-4 z-50 flex w-full items-center justify-between bg-green-600'>
      <Link href='/home' className='text-3xl font-semibold text-slate-50'>
        Arabacı
      </Link>
      {session ? (
        <Dropdown session={session} />
      ) : (
        <nav className='flex items-center gap-x-3'>
          <Link href='/sign-in'>
            <Button>Giriş Yap</Button>
          </Link>
          <Link href='/sign-up'>
            <Button variant='outline'>Kayıt Ol</Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
