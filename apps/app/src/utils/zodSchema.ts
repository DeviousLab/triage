import { z } from 'zod';

export const LoginUserSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'An email is required' })
    .email({ message: 'The email is invalid' }),
  password: z
    .string({
      required_error: 'A password is required',
    })
    .min(8, 'Password must be at least 8 characters long'),
});

export const RegisterUserSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'An email is required' })
      .email({ message: 'The email is invalid' }),
    password: z
      .string({
        required_error: 'A password is required',
      })
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z
      .string({
        required_error: 'Please confirm your password',
      })
      .min(8, 'Password must be at least 8 characters long'),
    accept: z.literal(true, {
      errorMap: () => ({ message: 'You must accept Terms and Services' }),
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords do not match',
        path: ['confirmPassword'],
      });
    }
  });

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'An email is required' })
    .email({ message: 'The email is invalid' }),
});

export const ResetPasswordSchema = z.object({
  code: z
    .string()
    .min(1, { message: 'A code is required' })
    .max(6, { message: 'The code is invalid' }),
  password: z
    .string({ required_error: 'A password is required' })
    .min(8, 'Password must be at least 8 characters long'),
});

export const ConfirmCodeSchema = z.object({
  code: z
    .string()
    .min(1, { message: 'A code is required' })
    .max(6, { message: 'The code is invalid' }),
});
