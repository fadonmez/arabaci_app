'use client';
import React from 'react';
import { Button } from './ui/button';
import { reserveCar } from '@/lib/actions/car.actions';
import { useRouter } from 'next/navigation';
import { updateUser } from '@/lib/actions/user.actions';

const ReservationButton = ({ userEmail, id }: any) => {
  const router = useRouter();
  const handleClick = async () => {
    try {
      await reserveCar(id);
      await updateUser({
        userId: userEmail,
        carId: id,
      });
      router.push(`/reservation/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button onClick={handleClick} className='w-full mt-4'>
        Rezervasyon Yap
      </Button>
    </div>
  );
};

export default ReservationButton;
