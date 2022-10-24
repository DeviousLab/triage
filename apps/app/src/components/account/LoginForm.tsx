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

import { signIn } from '../../utils/authFunctions';
import { LoginUserSchema } from '../../utils/zodSchema';

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
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginUserSchemaType> = ({
    email,
    password,
  }) => {
    signIn(email, password)
      .then(() => {
        router.push('/dashboard');
        toast.success('Logged in successfully');
      })
      .catch((error) => {
        switch (error.toString()) {
          case 'UserNotFoundException':
            toast.error('User not found');
            break;
          case 'NotAuthorizedException: Incorrect username or password.':
            toast.error('Incorrect email or password');
            break;
          case 'UserNotConfirmedException: User is not confirmed.':
            toast.error('User not confirmed');
            break;
          default:
            toast.error(error.toString());
        }
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

          <div className="flex items-center py-1 text-xs uppercase text-gray-400 before:mr-6 before:flex-[1_1_0%] before:border-t before:border-gray-300 after:ml-6 after:flex-[1_1_0%] after:border-t after:border-gray-300">
            Or
          </div>
          <div className="mt-2">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border bg-white py-3 px-4 align-middle text-sm font-medium text-logo shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
            >
              <svg
                className="h-auto w-4"
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
              </svg>
              Sign in with Google
            </button>
          </div>

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
