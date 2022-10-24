import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:h-screen lg:max-w-screen-xl lg:px-8 lg:py-28"
    >
      <motion.div
        className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl"
        initial={{ y: 300, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { ease: 'easeOut', duration: 1 },
        }}
        viewport={{ once: true }}
      >
        <div>
          <p
            tabIndex={0}
            className="text-center font-Arimo text-sm font-bold uppercase leading-4 tracking-widest text-primary focus:outline-none"
          >
            How much does it cost?
          </p>
        </div>
        <h2 className="mb-6 pt-4 text-center font-Inter text-4xl font-bold leading-10 tracking-tight text-logo md:mx-auto lg:text-4xl">
          Pricing
        </h2>
        <p className="text-base text-gray-600 md:text-lg">
          For better or for worse, I hold the belief that services related to
          health and education should be free. It wouldn&apos;t sit right with
          me to profit in an already over-monetised industry.
          <br />
          So, I&apos;m offering this service for free. However, if you would
          like to support me, you can do so by buying me a coffee.
        </p>
      </motion.div>
      <motion.div
        className="max-w-md sm:mx-auto lg:max-w-screen-md"
        aria-label="pricing option"
        initial={{ y: 300, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { ease: 'easeOut', duration: 1, delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-between rounded border bg-white p-5 font-Arimo shadow-sm">
          <div className="mb-6">
            <div className="mb-4 flex items-center justify-between border-b pb-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  Personal use
                </p>
                <motion.p
                  className="font-Inter text-5xl font-extrabold tracking-tight text-transparent"
                  initial={{ color: '#000', scale: 0.8 }}
                  whileInView={{
                    color: [
                      '#0978FE',
                      '#0654B2',
                      '#3A22FE',
                      '#09FEB5',
                      '#06B27E',
                      '#02073E',
                    ],
                    scale: 1,
                    transition: {
                      ease: 'backOut',
                      duration: 3,
                    },
                  }}
                  transition={{
                    type: 'spring',
                    damping: 10,
                    mass: 0.75,
                    stiffness: 100,
                    duration: 3,
                  }}
                  viewport={{ once: true }}
                >
                  Free
                </motion.p>
              </div>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="h-4 w-4 text-accent"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                    All features included
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="h-4 w-4 text-accent"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                    All functionality included
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="h-4 w-4 text-accent"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">No limitations</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="h-4 w-4 text-accent"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">No hidden fees</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
              <a 
              href="/account/register"
              className="mb-4 inline-flex h-12 w-full items-center justify-center rounded bg-primary px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-accent focus:outline-none">
                Start for free
              </a>
            <p className="text-sm text-gray-600">
              No credit card required. No commitment.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Pricing;
