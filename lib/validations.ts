'use client';

import * as z from 'zod';

export const formSchema = z
  .object({
    name: z.string().min(2).max(50),
    email: z.string().email().min(6).max(50),
    password: z.string().min(5).max(12),
    confirmPassword: z.string().min(5).max(12),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // path of the error
  });

export const carSchema = z.object({
  brand: z.string().min(2).max(10),
  carModel: z.string().min(2).max(15),
  year: z.string().min(4).max(4),
  cc: z.string().min(3).max(5),
  color: z.string().min(2).max(10),
  price: z.string().min(6).max(8),
  imgUrl: z.string().url(),
});
