'use client';
import { authenticate } from '@/lib/actions/auth.actions';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';

const LoginForm = () => {
  const [err, setErr] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (formData: any) => {
    setIsSubmitting(true);

    try {
      const data = await authenticate(formData);
      if (data) {
        setErr(data.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
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

        <Button
          type='submit'
          className='primary-gradient w-fit !text-light-900'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Yükleniyor' : 'Giriş Yap'}
        </Button>
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
