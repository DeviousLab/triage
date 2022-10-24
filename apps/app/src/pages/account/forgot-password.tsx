import type { NextPage } from 'next';

import Footer from '../../components/account/Footer';
import ForgotPasswordForm from '../../components/account/ForgotPasswordForm';
import Header from '../../components/account/Header';
import { Meta } from '../../layouts/Meta';

const Register: NextPage = () => {
  return (
    <>
      <Meta
        title="triage | Forgot Password"
        description="Recover your account"
      />
      <Header />
      <ForgotPasswordForm />
      <Footer />
    </>
  );
};
export default Register;
