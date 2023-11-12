import { auth } from '@/auth';
import ContactForm from '@/components/ContactForm';
import { redirect } from 'next/navigation';
import React from 'react';

const Contact = async () => {
  const session = await auth();
  if (!session) {
    redirect('/sign-in');
  }
  return <ContactForm user={session?.user} />;
};

export default Contact;
