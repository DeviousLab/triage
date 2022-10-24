
import { FiGithub, FiTwitter } from 'react-icons/fi';

import Logo from '../assets/images/temp-logo.svg';

const Footer = () => {
  return (
    <footer className="text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
          <a
            href="/"
            className="flex items-center justify-center font-medium text-gray-900 md:justify-start"
            aria-label="triage"
            title="triage"
          >
            <img
              className="w-8 cursor-pointer"
              src={Logo}
              alt="triage logo"
            />
            <span className="ml-1 font-Poppins text-xl text-logo">triage</span>
          </a>
        <p className="mt-4 font-Arimo text-sm text-gray-600 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          &copy; 2022 triage —
            <a
              href="https://deviouslab.dev"
              className="ml-1"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="DeviousLab portfolio link"
              title="DeviousLab portfolio link"
            >
              @DeviousLab
            </a>
        </p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://github.com/DeviousLab"
              className="cursor-pointer text-gray-500"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub social link"
              title="GitHub social link"
            >
              <FiGithub size={25} />
            </a>
            <a
              href="https://twitter.com/DeviousLab"
              className="ml-3 cursor-pointer text-gray-500"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter social link"
              title="Twitter social link"
            >
              <FiTwitter size={25} />
            </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
