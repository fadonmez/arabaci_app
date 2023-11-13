'use client';
import Image from 'next/image';
import React from 'react';
import CarCard from './CarCard';

interface IProps {
  cars: any;
  isAdmin?: boolean;
}

const CarList = ({ cars, isAdmin }: IProps) => {
  const objectCars = JSON.parse(cars);
  return (
    <section className='mt-6 flex flex-col items-center'>
      <h2 className='text-center text-4xl text-white'>Arabalarımız</h2>
      {objectCars.length ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-4 mt-4 '>
          {objectCars.map((car: any) => (
            <CarCard key={car._id} car={car} isAdmin={isAdmin} />
            // <>
            //   <p>{car.brand}</p>
            //   <Image src={car.imgUrl} width={528} height={396} alt='car image' />
            // </>
          ))}
        </div>
      ) : (
        <h3>Şu anda stokta arabamız kalmadı.</h3>
      )}
    </section>
  );
};

export default CarList;
