/* eslint-disable tailwindcss/no-custom-classname */

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoAtOutline, IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import type { z } from 'zod';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { LoginUserSchema } from '../../utils/zodSchema';
import { auth } from '../../firebase/client';
import { FIREBASE_ERRORS } from '../../firebase/errors';
import SocialProvider from './SocialProvider';

type LoginUserSchemaType = z.infer<typeof LoginUserSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserSchemaType>({
    resolver: zodResolver(LoginUserSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginUserSchemaType> = ({
    email,
    password,
  }) => {
    signInWithEmailAndPassword(email, password)
      .then(() => {
        toast.success('Logged in successfully');
        router.push('/');
      });
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center font-Inter text-2xl font-bold text-primary sm:text-3xl">
          Welcome back!
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 mb-0 space-y-4 rounded-lg bg-gray-50 p-8 font-Arimo text-logo"
        >
          <p className="text-lg font-medium">Sign in to your account</p>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>

            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
                {...register('email')}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <IoAtOutline className="h-5 w-5 text-gray-400" />
              </span>
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Link href="/account/forgot-password">
                <a className="text-sm font-medium text-primary decoration-2 hover:underline">
                  Forgot password?
                </a>
              </Link>
            </div>
            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
                {...register('password')}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <IoEyeOffOutline className="h-5 w-5 text-gray-400" />
                  ) : (
                    <IoEyeOutline className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </span>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
          >
            Sign in
          </button>
          <p className="mt-1 text-sm text-red-600">
            {FIREBASE_ERRORS[error?.message!] || error?.message}
          </p>
          <div className="flex items-center py-1 text-xs uppercase text-gray-400 before:mr-6 before:flex-[1_1_0%] before:border-t before:border-gray-300 after:ml-6 after:flex-[1_1_0%] after:border-t after:border-gray-300">
            Or
          </div>
          
          <SocialProvider message={'Sign in with Google'}/>

          <p className="text-center text-sm text-gray-500">
            Don't have an account yet?
            <Link href="/account/register">
              <a className="ml-1 underline">Sign up here</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
