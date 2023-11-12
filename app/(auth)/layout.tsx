import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen items-center justify-center relative'>
      <div className='absolute bg-[url(https://i.pinimg.com/originals/ae/53/c1/ae53c15c043d3518f8bc452689ece641.jpg)] top-0 w-full h-screen object-contain blur-sm'></div>
      <div className='z-50'>{children}</div>
    </div>
  );
};

export default AuthLayout;
