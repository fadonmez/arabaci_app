import { auth } from '@/auth';
import CarCard from '@/components/CarCard';
import ReservationButton from '@/components/ReservationButton';
import { Button } from '@/components/ui/button';
import { getCars, reserveCar } from '@/lib/actions/car.actions';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async ({ params }: any) => {
  const session = await auth();
  const result = await getCars({});
  const { id } = params;
  const userEmail = session?.user?.email;
  const thisCar = result.cars.find((car) => car.id === params.id);
  if (!session) {
    redirect('/sign-in');
  }

  return (
    <div className='flex items-center mt-auto flex-col'>
      <CarCard car={thisCar} />
      <ReservationButton userEmail={userEmail} id={id} />
    </div>
  );
};

export default page;
