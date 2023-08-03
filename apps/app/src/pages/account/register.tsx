import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import Footer from '../../components/account/Footer';
import Header from '../../components/account/Header';
import RegisterForm from '../../components/account/RegisterForm';
import { auth } from '../../firebase/client';
import { Meta } from '../../layouts/Meta';

const Register: NextPage = () => {
  const router = useRouter();
  const [user, loadingUser] = useAuthState(auth);

  useEffect(() => {
    if(user) {
      router.push('/account/verify-email');
    }
  }, [user]);
  
  return (
    <>
      <Meta title="triage | Register" description="Register for an account" />
      <Header />
      <RegisterForm />
      <Footer />
    </>
  );
};
export default Register;
