import NotFound from './not-found';
import { auth } from '@/auth';
import CarCard from '@/components/CarCard';
import ReservationButton from '@/components/ReservationButton';
import { Button } from '@/components/ui/button';
import { getCar, reserveCar } from '@/lib/actions/car.actions';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async ({ params }: any) => {
  const session = await auth();
  const { id } = params;
  const result = await getCar({ _id: id });
  if (id.length !== 24 || !result.car) {
    return <NotFound />;
  }
  const userEmail = session?.user?.email;
  if (!session) {
    redirect('/sign-in');
  }

  return (
    <div className='flex items-center mt-auto flex-col'>
      <CarCard car={JSON.stringify(result.car)} />
      {result.car.isReservated ? (
        <Button disabled>Zaten rezerve edilmiş</Button>
      ) : (
        <ReservationButton userEmail={userEmail} id={id} />
      )}
    </div>
  );
};

export default page;
