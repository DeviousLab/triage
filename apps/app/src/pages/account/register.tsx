import type { NextPage } from 'next';

import Footer from '../../components/account/Footer';
import Header from '../../components/account/Header';
import RegisterForm from '../../components/account/RegisterForm';
import { Meta } from '../../layouts/Meta';

const Register: NextPage = () => {

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
