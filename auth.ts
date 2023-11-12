import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';

import bcrypt from 'bcrypt';
import { connectToDatabase } from './lib/mongoose';
import User from './database/user.model';

const login = async (credentials: any) => {
  try {
    await connectToDatabase();
    const user = await User.findOne({ email: credentials.email });
    if (!user) {
      throw new Error('user not found');
    }
    const isMatch = await bcrypt.compare(credentials.password, user.password);
    if (!isMatch) {
      throw new Error('password is incorrect');
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('failed to login');
  }
};
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log('in auth:', error);
          return null;
        }
      },
    }),
  ],
});
