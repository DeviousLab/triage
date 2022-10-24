import { motion } from 'framer-motion';
import { IoBarChart, IoDocumentsSharp } from 'react-icons/io5/index';
import { MdDocumentScanner, MdPrivacyTip } from 'react-icons/md/index';

const Features = () => {
  return (
    <section id="features" className="mx-auto pt-28 lg:h-screen">
      <div>
        <motion.div
          role="contentinfo"
          className="flex flex-col items-center px-4"
          initial={{ y: 300, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { ease: 'easeOut', duration: 1 },
          }}
          viewport={{ once: true }}
        >
          <p
            tabIndex={0}
            className="text-center font-Arimo text-sm font-bold uppercase leading-4 tracking-widest text-primary focus:outline-none"
          >
            What does it do?
          </p>
          <h2
            tabIndex={0}
            className="pt-4 text-center font-Inter text-4xl font-bold leading-10 tracking-tight text-logo focus:outline-none md:w-9/12 lg:w-5/12 lg:text-4xl"
          >
            Features
          </h2>
        </motion.div>
        <motion.div
          tabIndex={0}
          aria-label="group of features"
          className="mt-20 flex flex-wrap justify-center gap-10 px-4 focus:outline-none"
          initial={{ y: 300, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { ease: 'easeOut', duration: 1, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <div
            tabIndex={0}
            aria-label="feature 1"
            className="flex pb-20 focus:outline-none sm:w-full md:w-5/12"
          >
            <div className="relative mr-5 h-20 w-20">
              <div className="absolute top-0 right-0 mt-2 mr-1 h-16 w-16 rounded-2xl bg-blue-100" />
              <div className="absolute bottom-0 left-0 mt-2 mr-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-bl from-accent-light to-accent text-white">
                <MdDocumentScanner size={35} title="document scanner" />
              </div>
            </div>
            <div className="w-10/12">
              <h2
                tabIndex={0}
                className="text-lg font-semibold leading-tight text-gray-800 focus:outline-none"
              >
                No User Entry
              </h2>
              <p
                tabIndex={0}
                className="pt-2 text-base leading-normal text-gray-600 focus:outline-none"
              >
                Manually entering data is a thing of the past, simply upload
                your report and values will be automatically gathered using OCR
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            aria-label="feature 2"
            className="flex pb-20 focus:outline-none sm:w-full md:w-5/12"
          >
            <div className="relative mr-5 h-20 w-20">
              <div className="absolute top-0 right-0 mt-2 mr-1 h-16 w-16 rounded-2xl bg-blue-100" />
              <div className="absolute bottom-0 left-0 mt-2 mr-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tl from-accent-light to-accent text-white">
                <IoDocumentsSharp size={35} title="stack of documents" />
              </div>
            </div>
            <div className="w-10/12">
              <h2
                tabIndex={0}
                className="text-lg font-semibold leading-tight text-gray-800 focus:outline-none"
              >
                One Destination
              </h2>
              <p
                tabIndex={0}
                className="pt-2 text-base leading-normal text-gray-600 focus:outline-none"
              >
                Going through multiple laboratory reports can be tedious, keep
                track of all your reports in one place
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            aria-label="feature 3"
            className="flex pb-20 focus:outline-none sm:w-full md:w-5/12"
          >
            <div className="relative mr-5 h-20 w-20">
              <div className="absolute top-0 right-0 mt-2 mr-1 h-16 w-16 rounded-2xl bg-blue-100" />
              <div className="absolute bottom-0 left-0 mt-2 mr-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-accent-light to-accent text-white">
                <IoBarChart size={35} title="bar chart" />
              </div>
            </div>
            <div className="w-10/12">
              <h2
                tabIndex={0}
                className="text-lg font-semibold leading-tight text-gray-800 focus:outline-none"
              >
                Data Visualisation
              </h2>
              <p
                tabIndex={0}
                className="pt-2 text-base leading-normal text-gray-600 focus:outline-none"
              >
                See how specific test values fluctuate over time on high
                fidelity charts on our dashboard
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            aria-label="feature 4"
            className="flex pb-20 focus:outline-none sm:w-full md:w-5/12"
          >
            <div className="relative mr-5 h-20 w-20">
              <div className="absolute top-0 right-0 mt-2 mr-1 h-16 w-16 rounded-2xl bg-blue-100" />
              <div className="absolute bottom-0 left-0 mt-2 mr-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-light to-accent text-white">
                <MdPrivacyTip size={35} title="data privacy" />
              </div>
            </div>
            <div className="w-10/12">
              <h2
                tabIndex={0}
                className="text-lg font-semibold leading-tight text-gray-800 focus:outline-none"
              >
                User Privacy
              </h2>
              <p
                tabIndex={0}
                className="pt-2 text-base leading-normal text-gray-600 focus:outline-none"
              >
                Medical reports contain sensitive data, and your data is never
                sent to our servers. Data is stored on the local device
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
