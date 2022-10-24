import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <motion.section
      className="w-screen rounded-md bg-primary bg-[url('/img/BannerPattern.svg')] bg-cover bg-center bg-no-repeat object-center lg:mx-auto lg:w-2/3"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: { ease: 'easeOut', duration: 1 },
      }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="font-Inter text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Make tracking your health easier.</span>
          <span className="block">Start using triage today.</span>
        </h2>
          <a href="/account/register" className="mt-8 inline-flex w-full items-center justify-center rounded-3xl border bg-white px-5 py-3 font-Arimo text-lg text-accent transition duration-300 ease-in-out hover:border-white hover:bg-accent	hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:w-auto">
            Get Started
          </a>
      </div>
    </motion.section>
  );
};
export default Banner;
