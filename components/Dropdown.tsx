import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOut } from '@/auth';
import { Button } from './ui/button';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getUserByEmail } from '@/lib/actions/user.actions';
interface IProps {
  session?: any;
}

const Dropdown = async ({ session }: IProps) => {
  const isAdmin = await getUserByEmail(session?.user?.email);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='p-2 rounded-full bg-green-950'>
          <BsFillPersonFill size={24} fill='#fff' />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-4'>
        <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className='w-full' href='/profile'>
            Profil
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className='w-full' href='/contact'>
            İletişim
          </Link>
        </DropdownMenuItem>
        {isAdmin.isAdmin && (
          <DropdownMenuItem>
            <Link className='w-full' href='/admin'>
              Admin Panel
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem className='bg-red-400 p-0 mt-2'>
          <form
            className='w-full'
            action={async () => {
              'use server';
              await signOut();
              redirect('/sign-in');
            }}
          >
            <Button className='bg-red-500 px-4 py-2 rounded-md w-full hover:bg-red-600 transition-colors'>
              Log out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    //
  );
};

export default Dropdown;
