import type { CognitoUser } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';

interface SignUpData {
  user: CognitoUser;
  userConfirmed: boolean;
  userSub: string;
}

interface ErrorData {
  msg: string;
}

export async function signUp(
  password: string,
  email: string
): Promise<SignUpData | ErrorData> {
  try {
    const { user, userConfirmed, userSub } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
      autoSignIn: {
        enabled: true,
      },
    });
    return {
      user,
      userConfirmed,
      userSub,
    };
  } catch (e: any) {
    console.log(e);
    throw e;
  }
}

export async function signIn(
  username: string,
  password: string
): Promise<CognitoUser | ErrorData> {
  try {
    const data = await Auth.signIn(username, password);
    return data;
  } catch (e: any) {
    console.log(e);
    throw e;
  }
}

export async function forgotPassword(username: string) {
  try {
    const data = await Auth.forgotPassword(username);
    return data;
  } catch (e: any) {
    console.log(e);
    throw e;
  }
}

export async function forgotPasswordSubmit(
  username: string,
  code: string,
  newPassword: string
) {
  try {
    const data = await Auth.forgotPasswordSubmit(username, code, newPassword);
    return data;
  } catch (e: any) {
    console.log(e);
    throw e;
  }
}

export async function confirmSignUp(username: string, code: string) {
  try {
    const data = await Auth.confirmSignUp(username, code);
    return data;
  } catch (e: any) {
    console.log(e);
    throw e;
  }
}
