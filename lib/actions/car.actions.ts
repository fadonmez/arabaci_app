'use server';
import Car from '@/database/car.model';
import { connectToDatabase } from '../mongoose';
import { revalidatePath } from 'next/cache';
import mongoose from 'mongoose';

export async function getCars(params: any) {
  try {
    connectToDatabase();
    const cars = await Car.find({}).sort({ createdAt: -1 });
    return { cars };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCar({ _id }: { _id: any }) {
  if (mongoose.Types.ObjectId.isValid(_id)) {
    try {
      connectToDatabase();
      const car = await Car.findById(_id);
      return { car };
    } catch (error) {
      console.log(error);
      throw error;
    }
  } else {
    return { car: null };
  }
}

export async function createCar(params: any) {
  try {
    const { brand, carModel, year, cc, color, price, imgUrl } = params;
    const numYear = Number(year);
    const numCc = Number(cc);
    const numPrice = Number(price);
    await connectToDatabase();
    await Car.create({
      brand,
      carModel,
      year: numYear,
      cc: numCc,
      color,
      price: numPrice,
      imgUrl,
    });
    console.log('car added');
    revalidatePath('/');
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteCar(_id: any) {
  try {
    await connectToDatabase();
    await Car.findByIdAndDelete(_id);
    console.log('car deleted');
    revalidatePath('/');
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function reserveCar(_id: any) {
  try {
    await connectToDatabase();
    await Car.findByIdAndUpdate(_id, { isReservated: true });
    console.log('car reservated');
    revalidatePath('/');
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function cancelReservation(_id: any) {
  try {
    await connectToDatabase();
    await Car.findByIdAndUpdate(_id, { isReservated: false });
    console.log('car reservation cancelled');
    revalidatePath('/');
  } catch (error) {
    console.log(error);
    throw error;
  }
}
