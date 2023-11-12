'use server';
import User from '@/database/user.model';
import { connectToDatabase } from '../mongoose';

export async function getUserByEmail(email: any) {
  try {
    connectToDatabase();

    const user = User.findOne({ email: email });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
