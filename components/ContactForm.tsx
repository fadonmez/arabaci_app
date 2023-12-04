'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { createMessage } from '@/lib/actions/contact.actions';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = ({ user }: any) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [message, setMessage] = useState('');
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (message.length < 10) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Message must be include 10 character.',
      });
      setIsSubmitting(false);
      return;
    }
    try {
      await createMessage({
        name: user?.name,
        email: user?.email,
        message,
      });
      toast({
        title: 'Message Send',
        description: `Thank you for Message. ${user.name}`,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setMessage('');
      setIsSubmitting(false);
    }
  };
  return (
    <section className='text-gray-600 body-font relative'>
      <div className='absolute inset-0 bg-gray-300'>
        <iframe
          width='100%'
          height='100%'
          title='map'
          src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Arabac%C4%B1)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        ></iframe>
      </div>
      <form
        onSubmit={handleSubmit}
        className='container px-5 py-24 mx-auto flex'
      >
        <div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
          <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
            Feedback
          </h2>
          <p className='leading-relaxed mb-5 text-gray-600'>
            Contact us if you have a problem
          </p>

          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-sm text-gray-600'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            ></textarea>
          </div>
          <Button
            type='submit'
            disabled={isSubmitting}
            className='text-white disabled:bg-slate-500 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          <p className='text-xs text-gray-500 mt-3'>
            We'll contact you within 24 hours.
          </p>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
