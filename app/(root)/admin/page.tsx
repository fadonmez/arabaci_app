import { auth } from '@/auth';
import AdminForm from '@/components/AdminForm';
import { getUserByEmail } from '@/lib/actions/user.actions';
import console from 'console';
import { redirect } from 'next/navigation';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getCars } from '@/lib/actions/car.actions';
import CarList from '@/components/CarList';

const Admin = async () => {
  const session = await auth();
  const result = await getCars({});
  const stringCars = JSON.stringify(result.cars);

  if (!session) {
    redirect('/sign-in');
  }
  const isAdmin = await getUserByEmail(session?.user?.email);
  if (!isAdmin.isAdmin) {
    redirect('/home');
  }
  return (
    <Tabs defaultValue='add' className='w-full p-4'>
      <TabsList>
        <TabsTrigger value='add'>Ekle</TabsTrigger>
        <TabsTrigger value='delete'>Sil</TabsTrigger>
      </TabsList>
      <TabsContent value='add'>
        <AdminForm />
      </TabsContent>
      <TabsContent value='delete'>
        <CarList isAdmin={true} cars={stringCars} />
      </TabsContent>
    </Tabs>
  );
};

export default Admin;
