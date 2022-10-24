import { Auth } from 'aws-amplify';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Footer from '../../components/account/Footer';
import Header from '../../components/account/Header';
import RegisterForm from '../../components/account/RegisterForm';
import { Meta } from '../../layouts/Meta';

const Register: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((_data) => {
        router.push('/dashbord');
      })
      .catch((error) => console.log(error));
  }, []);
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
