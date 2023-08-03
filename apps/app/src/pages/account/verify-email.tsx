import { NextPage } from 'next';

import Footer from '../../components/account/Footer';
import Header from '../../components/account/Header';
import { Meta } from '../../layouts/Meta';
import EmailVerification from "../../components/account/EmailVerification"

const SendEmailVerification: NextPage = () => {

  return (
    <>
    <Meta title="triage | Register" description="Verify your email" />
      <Header />
      <EmailVerification />
      <Footer />
    </>
    
  );
};
export default SendEmailVerification;