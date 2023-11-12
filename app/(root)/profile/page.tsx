import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import React from 'react';

const Profile = async () => {
  const session = await auth();
  if (!session) {
    redirect('/sign-in');
  }
  return (
    <div className='flex items-center justify-center mt-6'>
      <div className='flex flex-col items-start text-start  h-full'>
        <h3>Profil</h3>
        <p>İsim : {session.user?.name}</p>
        <p>Email : {session.user?.email}</p>
        <form
          className='w-full'
          action={async () => {
            'use server';
            await signOut();
            redirect('/sign-in');
          }}
        >
          <Button className='bg-red-500 px-4 py-2 rounded-md w-fit mx-auto hover:bg-red-600 transition-colors'>
            Log out
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
