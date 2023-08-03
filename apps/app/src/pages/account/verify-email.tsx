import Footer from '../../components/account/Footer';
import Header from '../../components/account/Header';
import { auth } from '../../firebase/client';
import { Meta } from '../../layouts/Meta';
import EmailVerification from "../../components/account/EmailVerification"

const SendEmailVerification = () => {

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