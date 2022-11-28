import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import Footer from '../../components/account/Footer';
import Header from '../../components/account/Header';
import LoginForm from '../../components/account/LoginForm';
import { auth } from '../../firebase/client';
import { Meta } from '../../layouts/Meta';

const Register: NextPage = () => {
  const [user, loadingUser] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if(user) {
      router.push('/');
    }
  }, [user]);
  
  return (
    <>
      <Meta title="triage | Login" description="Login to your account" />
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
};
export default Register;
