import type { NextPage } from 'next';

import Footer from '../../components/account/Footer';
import Header from '../../components/account/Header';
import LoginForm from '../../components/account/LoginForm';
import { Meta } from '../../layouts/Meta';

const Register: NextPage = () => {
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
