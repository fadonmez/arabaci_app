'use client';
import { authenticate } from '@/lib/actions/auth.actions';
import Link from 'next/link';
import React, { useState } from 'react';

const LoginForm = () => {
  const [err, setErr] = useState('');
  const handleLogin = async (formData: any) => {
    const data = await authenticate(formData);
    if (data) {
      setErr(data.error);
    }
  };
  return (
    <div className='p-4 bg-gray-300  rounded-md'>
      <form
        action={handleLogin}
        className='flex flex-col items-center justify-center'
      >
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Your email
          </label>
          <input
            name='email'
            type='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='name@arabaci.com'
            required
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Your password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required
          />
        </div>

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
        <p className='text-red-500'>{err}</p>
        <span>
          Don't have a account ?{' '}
          <Link href='/sign-up' className='underline'>
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
