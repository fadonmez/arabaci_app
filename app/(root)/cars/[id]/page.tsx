import { auth } from '@/auth';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { getCars } from '@/lib/actions/car.actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async ({ params }: any) => {
  const session = await auth();
  const result = await getCars({});
  const thisCar = result.cars.find((car) => car.id === params.id);
  if (!session) {
    redirect('/sign-in');
  }
  return (
    <div className='flex items-center mt-auto flex-col'>
      <CarCard car={thisCar} />
      <Link
        href={`/reservation/${params.id}`}
        prefetch={false}
        className='mt-4 '
      >
        <Button className='w-full'>Rezervasyon Yap</Button>
      </Link>
    </div>
  );
};

export default page;
