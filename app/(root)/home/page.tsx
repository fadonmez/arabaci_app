import { auth, signOut } from '@/auth';
import CarList from '@/components/CarList';
import { getCars } from '@/lib/actions/car.actions';
import React from 'react';

const Home = async () => {
  const session = await auth();
  const result = await getCars({});
  const stringCars = JSON.stringify(result.cars);
  return (
    <>
      <section className='flex flex-col items-center justify-center bg-gradient-to-tr from-green-400 to-green-950 h-[400px] w-full '>
        <div className='flex flex-col gap-y-6 items-center justify-center'>
          <h1 className='text-white text-4xl font-semibold text-center'>
            Arabacı'ya hoşgeldin {session?.user?.name}
          </h1>
          <p className='text-black text-2xl '>Şimdi keşfetmeye başla</p>
        </div>
      </section>
      <CarList cars={stringCars} />
    </>
  );
};

export default Home;
