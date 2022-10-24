import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoAtOutline } from 'react-icons/io5';
import type { z } from 'zod';

import { forgotPassword } from '../../utils/authFunctions';
import { ForgotPasswordSchema } from '../../utils/zodSchema';
import ResetPasswordForm from './ResetPasswordForm';

type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(ForgotPasswordSchema),
  });
  const [showResetPassword, setShowResetPassword] = useState<boolean>(false);
  const [confirmEmail, setConfirmEmail] = useState<string>('');

  const onSubmit: SubmitHandler<ForgotPasswordSchemaType> = ({ email }) => {
    forgotPassword(email)
      .then(() => {
        setShowResetPassword(true);
        setConfirmEmail(email);
      })
      .catch((error) => {
        switch (error.toString()) {
          case 'UserNotFoundException: Username/client id combination not found.':
            toast.error('User not found');
            break;
          case 'InvalidParameterException: Cannot reset password for the user as there is no registered/verified email or phone_number':
            toast.error('Invalid email');
            break;
          default:
            toast.error(error.toString());
        }
      });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        {showResetPassword ? (
          <ResetPasswordForm username={confirmEmail} />
        ) : (
          <>
            <h1 className="text-center font-Inter text-2xl font-bold text-primary sm:text-3xl">
              Forgot your password?
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 mb-0 space-y-4 rounded-lg bg-gray-50 p-8 font-Arimo text-logo"
            >
              <p className="text-lg font-medium">Recover your account</p>

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

              <button
                type="submit"
                className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
              >
                Recover password
              </button>

              <p className="text-center text-sm text-gray-500">
                Remember your password?
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

export default ForgotPasswordForm;
