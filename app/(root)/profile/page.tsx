import { auth, signOut } from '@/auth';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { cancelReservation } from '@/lib/actions/car.actions';
import {
  cancelUserReservation,
  getUserByEmail,
} from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import React from 'react';

const Profile = async () => {
  const session = await auth();
  const user = await getUserByEmail(session?.user?.email);

  if (!session) {
    redirect('/sign-in');
  }
  return (
    <div className='flex-1 flex relative flex-col lg:flex-row  '>
      <div className='flex h-fit flex-col gap-y-6 items-center justify-center text-center lg:sticky left-0 top-0  w-full md:w-fit   '>
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
      <div className='p-4'>
        <h3 className='text-center text-4xl font-semibold'>Rezervasyonların</h3>
        {user.reservatedCars ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-4 mt-4 '>
            {user.reservatedCars.map((car: any) => (
              <div key={car._id} className='flex flex-col'>
                <CarCard key={car._id} car={JSON.stringify(car)} />
                <form
                  className='w-full'
                  action={async () => {
                    'use server';
                    await cancelReservation(car._id);
                    await cancelUserReservation({
                      userId: session.user?.email,
                      carId: car._id,
                    });
                  }}
                >
                  <Button className='bg-red-500 px-4 py-2 rounded-md w-full mx-auto hover:bg-red-600 transition-colors'>
                    İptal
                  </Button>
                </form>
              </div>
            ))}
          </div>
        ) : (
          <h3>Rezervasyonun yok</h3>
        )}
      </div>
    </div>
  );
};

export default Profile;
