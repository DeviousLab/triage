import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import {
	IoBarcodeOutline,
	IoEyeOffOutline,
	IoEyeOutline,
} from 'react-icons/io5';
import type { z } from 'zod';
import { useSignIn } from '@clerk/nextjs';

import { ResetPasswordSchema } from '../../utils/zodSchema';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import toast from 'react-hot-toast';

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
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [validCode, setValidCode] = useState<number>(0);
	const [complete, setComplete] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const { isLoaded, signIn, setActive } = useSignIn();
	const router = useRouter();

	const onSubmit: SubmitHandler<ResetPasswordSchemaType> = async ({
		code,
		password,
	}) => {
		if (!isLoaded) {
			return;
		}
		setLoading(true);
		await signIn
			?.attemptFirstFactor({
				strategy: 'reset_password_email_code',
				code,
				password,
			})
			.then((result) => {
				if (result.status === 'complete') {
					setActive({ session: result.createdSessionId });
					setComplete(true);
				} else {
					toast.error('Something went wrong');
					console.log(result);
				}
			})
			.catch((err: any) => toast.error(err.errors[0].longMessage));
	};

	return (
		<>
			<h1 className='text-center font-Inter text-2xl font-bold text-primary sm:text-3xl'>
				Reset your password
			</h1>

			{complete ? (
				<div className='mt-6 mb-0 space-y-4 rounded-lg bg-gray-50 p-8 font-Arimo text-logo'>
					<p className='text-md font-medium mt-4 text-center'>
						Your password has been successfully reset!
					</p>
					<div className='flex mt-4 justify-center'>
						<svg
							className='w-10 h-10 mr-2 fill-primary dark:fill-primary transition-transform'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
						</svg>
					</div>
					<Link legacyBehavior href='/account'>
						<a
							type='submit'
							className='block w-full rounded-lg text-center bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white'
						>
							Sign in
						</a>
					</Link>
				</div>
			) : (
				<>
					<p className='text-md font-medium mt-4 text-center'>
						We have sent a verification code to{' '}
						<span className='text-secondary'>{username}</span>
					</p>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='mt-6 mb-0 space-y-4 rounded-lg bg-gray-50 p-8 font-Arimo text-logo'
					>
						<p className='text-lg font-medium'>Enter a new password</p>

						<div>
							<label htmlFor='code' className='text-sm font-medium'>
								Verification Code
							</label>

							<div className='relative mt-1'>
								<input
									type='text'
									id='code'
									className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
									placeholder='Enter code'
									{...register('code')}
									onChange={(e) => {
										setValidCode(e.target.value.length);
									}}
								/>
								<span className='absolute inset-y-0 right-4 inline-flex items-center'>
									<IoBarcodeOutline className='h-5 w-5 text-gray-400' />
								</span>
							</div>
							{errors.code && (
								<p className='mt-1 text-sm text-red-600'>
									{errors.code.message}
								</p>
							)}
						</div>

						<div>
							<label htmlFor='password' className='text-sm font-medium'>
								Password
							</label>

							<div className='relative mt-1'>
								<input
									type={showPassword ? 'text' : 'password'}
									id='password'
									className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
									placeholder='Enter password'
									disabled={validCode !== 6}
									{...register('password')}
								/>
								<span className='absolute inset-y-0 right-4 inline-flex cursor-pointer items-center'>
									<button onClick={() => setShowPassword(!showPassword)}>
										{showPassword ? (
											<IoEyeOffOutline className='h-5 w-5 text-gray-400' />
										) : (
											<IoEyeOutline className='h-5 w-5 text-gray-400' />
										)}
									</button>
								</span>
							</div>
							<PasswordStrengthChecker password={watch('password')} />
							{errors.password && (
								<p className='mt-1 text-sm text-red-600'>
									{errors.password.message}
								</p>
							)}
						</div>

						<button
							type='submit'
							className='block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white'
						>
							Reset password
						</button>
						{loading && (
							<div className='flex mt-4 justify-center'>
								<svg
									aria-hidden='true'
									className='w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary transition-transform'
									viewBox='0 0 100 101'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
										fill='currentColor'
									/>
									<path
										d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
										fill='currentFill'
									/>
								</svg>
							</div>
						)}

						<p className='text-center text-sm text-gray-500'>
							Remember your password?
							<Link legacyBehavior href='/account'>
								<a className='ml-1 underline'>Sign in here</a>
							</Link>
						</p>
					</form>
				</>
			)}
		</>
	);
};

export default ResetPasswordForm;
