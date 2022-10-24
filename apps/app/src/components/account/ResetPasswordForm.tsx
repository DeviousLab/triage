import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  IoBarcodeOutline,
  IoEyeOffOutline,
  IoEyeOutline,
} from 'react-icons/io5';
import type { z } from 'zod';

import { forgotPasswordSubmit } from '../../utils/authFunctions';
import { ResetPasswordSchema } from '../../utils/zodSchema';
import PasswordStrengthChecker from './PasswordStrengthChecker';

type ForgotPasswordProps = {
  username: string;
};
type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;

const ResetPasswordForm = ({ username }: ForgotPasswordProps) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(ResetPasswordSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validCode, setValidCode] = useState(0);
  const router = useRouter();

  const onSubmit: SubmitHandler<ResetPasswordSchemaType> = ({
    code,
    password,
  }) => {
    forgotPasswordSubmit(username, code, password)
      .then(() => {
        toast.success('Password reset successfully');
        router.push('/account/');
      })
      .catch((error) => {
        switch (error.toString()) {
          case 'CodeMismatchException: Invalid verification code provided, please try again.':
            toast.error('Invalid code');
            break;
          case 'InvalidPasswordException: Password does not conform to policy: Password not long enough':
            toast.error(
              'Password must be at least 8 characters long, contain one number, one special character, and one capital letter'
            );
            break;
          case 'ExpiredCodeException':
            toast.error('Code expired');
            break;
          case 'LimitExceededException: Attempt limit exceeded, please try after some time.':
            toast.error('Too many attempts');
            break;
          case 'UserNotFoundException: Username/client id combination not found.':
            toast.error('User not found');
            break;
          default:
            toast.error(error.toString());
        }
      });
  };

  return (
    <>
      <h1 className="text-center font-Inter text-2xl font-bold text-primary sm:text-3xl">
        Reset your password
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 mb-0 space-y-4 rounded-lg bg-gray-50 p-8 font-Arimo text-logo"
      >
        <p className="text-lg font-medium">Enter a new password</p>

        <div>
          <label htmlFor="code" className="text-sm font-medium">
            Verification Code
          </label>

          <div className="relative mt-1">
            <input
              type="text"
              id="code"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter code"
              {...register('code')}
              onChange={(e) => {
                setValidCode(e.target.value.length);
              }}
            />
            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <IoBarcodeOutline className="h-5 w-5 text-gray-400" />
            </span>
          </div>
          {errors.code && (
            <p className="mt-1 text-sm text-red-600">{errors.code.message}</p>
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
              disabled={validCode !== 6}
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

        <button
          type="submit"
          className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
        >
          Reset password
        </button>

        <p className="text-center text-sm text-gray-500">
          Remember your password?
          <Link href="/account">
            <a className="ml-1 underline">Sign in here</a>
          </Link>
        </p>
      </form>
    </>
  );
};

export default ResetPasswordForm;
