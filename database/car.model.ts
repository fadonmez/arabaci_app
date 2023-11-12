import { Schema, models, model, Document } from 'mongoose';

export interface ICar extends Document {
  brand: string;
  carModel: string;
  year: number;
  cc: number;
  color: string;
  price: number;
  imgUrl: string;
}

const CarSchema = new Schema({
  brand: { type: String, required: true },
  carModel: { type: String, required: true },
  year: { type: Number, required: true },
  cc: { type: Number, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  imgUrl: { type: String, required: true },
});

const Car = models.Car || model('Car', CarSchema);

export default Car;
