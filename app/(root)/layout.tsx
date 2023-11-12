import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen '>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
