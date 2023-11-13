'use server';
import User from '@/database/user.model';
import { connectToDatabase } from '../mongoose';
import error from 'next/error';
import Car from '@/database/car.model';
import console from 'console';

export async function getUserByEmail(email: any) {
  try {
    connectToDatabase();

    const user = await User.findOne({ email: email }).populate({
      path: 'reservatedCars',
      model: Car,
    });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: any) {
  try {
    const { userId, carId } = params;
    connectToDatabase();
    const carDocument = [];
    const user = await getUserByEmail(userId);
    const oldCars = user.reservatedCars;
    carDocument.push(...oldCars, carId);

    await User.findOneAndUpdate(
      { email: userId },
      {
        reservatedCars: carDocument,
      }
    );
    console.log('user updated');
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function cancelUserReservation(params: any) {
  try {
    const { userId, carId } = params;
    connectToDatabase();
    let carDocument = [];
    const user = await getUserByEmail(userId);
    const oldCars = user.reservatedCars;
    carDocument = oldCars.filter((car: any) => !car._id.equals(carId));

    await User.findOneAndUpdate(
      { email: userId },
      {
        reservatedCars: carDocument,
      }
    );
    console.log('user cancel reservation');
  } catch (error) {
    console.log(error);
    throw error;
  }
}
