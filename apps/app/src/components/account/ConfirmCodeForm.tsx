import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoBarcodeOutline } from 'react-icons/io5';
import type { z } from 'zod';

import { confirmSignUp, signIn } from '../../utils/authFunctions';
import { ConfirmCodeSchema } from '../../utils/zodSchema';

type RegisterFormProps = {
  username: string;
  password: string;
};
type ConfirmCodeSchemaType = z.infer<typeof ConfirmCodeSchema>;

const ConfirmCodeForm = ({ username, password }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmCodeSchemaType>({
    resolver: zodResolver(ConfirmCodeSchema),
  });
  const [validCode, setValidCode] = useState(0);
  const router = useRouter();

  const onSubmit: SubmitHandler<ConfirmCodeSchemaType> = ({ code }) => {
    confirmSignUp(username, code)
      .then(() => {
        signIn(username, password)
          .then(() => {
            toast.success('Successfully logged in');
            router.push('/dashboard');
          })
          .catch((error) => {
            switch (error.toString()) {
              case 'UserNotConfirmedException: User is not confirmed.':
                toast.error('User is not confirmed');
                break;
              case 'NotAuthorizedException: Incorrect username or password.':
                toast.error('Incorrect username or password');
                break;
              default:
                toast.error(error.toString());
            }
          });
        toast.success('Successfully confirmed account');
      })
      .catch((error) => {
        switch (error.toString()) {
          case 'NotAuthorizedException: User cannot be confirmed. Current status is CONFIRMED':
            toast.error('User already confirmed');
            break;
          default:
            toast.error('Invalid code');
        }
      });
  };

  return (
    <>
      <h1 className="text-center font-Inter text-2xl font-bold text-primary sm:text-3xl">
        Verify your account
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 mb-0 space-y-4 rounded-lg bg-gray-50 p-8 font-Arimo text-logo"
      >
        <p className="text-lg font-medium">
          Check your email for a verification code
        </p>

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

        <button
          type="submit"
          className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
          disabled={validCode !== 6}
        >
          Verify Account
        </button>

        <p className="text-center text-sm text-gray-500">
          <Link href="/">
            <a className="ml-1 underline">Cancel</a>
          </Link>
        </p>
      </form>
    </>
  );
};

export default ConfirmCodeForm;
