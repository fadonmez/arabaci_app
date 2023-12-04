import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { formatNumber } from '@/lib/utils';
import { deleteCar } from '@/lib/actions/car.actions';

interface IProps {
  car: {
    _id: any;
    brand: string;
    carModel: string;
    year: number;
    cc: number;
    color: string;
    price: number;
    imgUrl: string;
    isReservated: boolean;
  };
  isAdmin?: boolean;
}

const CarCard = ({ car, isAdmin }: any) => {
  car = JSON.parse(car);
  const handleClick = async () => {
    await deleteCar(car._id);
  };

  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative'>
      <Image
        src={car.imgUrl}
        className='rounded-md'
        alt='car image'
        width={381}
        height={230}
      />

      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {car.brand} <span>{car.carModel}</span>
        </h5>

        <ul>
          <li>Yıl : {car.year}</li>
          <li>Motor Hacmi : {car.cc} L</li>
          <li>Renk: {car.color}</li>
        </ul>
        <div className='flex items-center justify-between mt-3 bg-green-300 rounded-md p-4'>
          <h3>Fiyat : {formatNumber(car.price)} TL</h3>
          {car.isReservated ? (
            <Button disabled={car.isReservated}>Reserve</Button>
          ) : (
            <Link href={`/cars/${car._id}`}>
              <Button>Satın Al</Button>
            </Link>
          )}
        </div>
      </div>
      {isAdmin && (
        <Button
          onClick={handleClick}
          className='bg-red-500 px-4 py-2 text-white w-full'
        >
          Sil
        </Button>
      )}
    </div>
  );
};

export default CarCard;
