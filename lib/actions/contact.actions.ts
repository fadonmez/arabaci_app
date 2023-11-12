'use server';

import { connectToDatabase } from '../mongoose';
import Message from '@/database/contact.model';

export async function createMessage(params: any) {
  try {
    const { name, email, message } = params;
    await connectToDatabase();
    await Message.create({ name, email, message });
    console.log('message created');
  } catch (error) {
    console.log(error);
    throw error;
  }
}
