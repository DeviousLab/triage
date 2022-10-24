/* eslint-disable tailwindcss/no-custom-classname */

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoAtOutline, IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import type { z } from 'zod';

import { signUp } from '../../utils/authFunctions';
import { RegisterUserSchema } from '../../utils/zodSchema';
import ConfirmCodeForm from './ConfirmCodeForm';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import SocialProvider from './SocialProvider';

type RegisterUserSchemaType = z.infer<typeof RegisterUserSchema>;

const RegisterForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserSchemaType>({
    resolver: zodResolver(RegisterUserSchema),
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmCode, setShowConfirmCode] = useState<boolean>(false);
  const [confirmEmail, setConfirmEmail] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onSubmit: SubmitHandler<RegisterUserSchemaType> = ({
    email,
    password,
  }) => {
    signUp(email, password)
      .then(() => {
        toast.success('Check your email for the confirmation link');
        setShowConfirmCode(true);
        setConfirmEmail(email);
        setConfirmPassword(password);
      })
      .catch((error) => {
        switch (error.toString()) {
          case 'UsernameExistsException':
            toast.error('User already exists');
            break;
          case 'InvalidParameterException':
            toast.error('Invalid email');
            break;
          case 'InvalidPasswordException: Password does not conform to policy: Password not long enough':
            toast.error(
              'Password must be at least 8 characters long, contain one number, one special character, and one capital letter'
            );
            break;
          default:
            toast.error(error.toString());
        }
      });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        {showConfirmCode ? (
          <ConfirmCodeForm username={confirmEmail} password={confirmPassword} />
        ) : (
          <>
            <h1 className="text-center font-Inter text-2xl font-bold text-primary sm:text-3xl">
              Get started today!
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 mb-0 space-y-4 rounded-lg bg-gray-50 p-8 font-Arimo text-logo"
            >
              <p className="text-lg font-medium">Sign up for an account</p>

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
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>

                <div className="relative mt-1">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter password"
                    {...register('password')}
                  />
                  <span className="absolute inset-y-0 right-4 inline-flex cursor-pointer items-center">
                    <button onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <IoEyeOffOutline className="h-5 w-5 text-gray-400" />
                      ) : (
                        <IoEyeOutline className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </span>
                </div>
                <PasswordStrengthChecker password={watch('password')} />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="text-sm font-medium">
                  Confirm Password
                </label>

                <div className="relative mt-1">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter password"
                    {...register('confirmPassword')}
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
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <div className="flex">
                  <input
                    id="accept-terms"
                    type="checkbox"
                    className="mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                    {...register('accept')}
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="accept-terms" className="text-sm">
                    I have read and agree to the{' '}
                    <a
                      className="font-medium text-blue-600 decoration-2 hover:underline"
                      href="#"
                    >
                      Terms of Service
                    </a>
                  </label>
                  {errors.accept && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.accept.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
              >
                Sign up
              </button>

              <div className="flex items-center py-1 text-xs uppercase text-gray-400 before:mr-6 before:flex-[1_1_0%] before:border-t before:border-gray-300 after:ml-6 after:flex-[1_1_0%] after:border-t after:border-gray-300">
                Or
              </div>

              <SocialProvider />

              <p className="text-center text-sm text-gray-500">
                Already have an account?
                <Link href="/account">
                  <a className="ml-1 underline">Sign in here</a>
                </Link>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
export default RegisterForm;
