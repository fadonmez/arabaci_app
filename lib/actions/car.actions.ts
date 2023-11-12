'use server';
import Car from '@/database/car.model';
import { connectToDatabase } from '../mongoose';
import { revalidatePath } from 'next/cache';

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
