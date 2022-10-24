import { useState } from 'react';

import Logo from '../assets/images/temp-logo.svg';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  function classNames(...classes: [string, string]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <header
      className={classNames(
        scrollPosition > 50 ? 'shadow-md bg-white' : 'shadow-none',
        'sticky top-0 z-40 transition ease-in duration-150'
      )}
    >
      <div className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
              <a
                href="/"
                aria-label="triage"
                title="triage"
                className="mr-8 inline-flex items-center"
              >
                <img
                  className="w-8 cursor-pointer"
                  src={Logo}
                  alt="triage logo"
                />
                <span className="ml-2 font-Poppins text-xl font-bold text-logo">
                  triage
                </span>
              </a>
            <ul className="hidden items-center space-x-8 lg:flex">
              <li>
                  <a
                    href="#features"
                    aria-label="Features of the product"
                    title="Features of the product"
                    className="border-b-4 border-transparent font-medium tracking-wide text-logo transition-colors duration-200 hover:border-accent-light hover:text-accent"
                  >
                    Features
                  </a>
              </li>
              <li>
                  <a
                    href="#process"
                    aria-label="Process of how the product works"
                    title="Process of how the product works"
                    className="border-b-4 border-transparent font-medium tracking-wide text-logo transition-colors duration-200 hover:border-accent-light hover:text-accent"
                  >
                    Process
                  </a>
              </li>
              <li>
                  <a
                    href="#pricing"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="border-b-4 border-transparent font-medium tracking-wide text-logo transition-colors duration-200 hover:border-accent-light hover:text-accent"
                  >
                    Pricing
                  </a>
              </li>
            </ul>
          </div>
          <ul className="hidden items-center space-x-8 lg:flex">
            <li>
                <a
                  href="/account"
                  aria-label="Sign in"
                  title="Sign in"
                  className="border-b-4 border-transparent font-medium tracking-wide text-logo transition-colors duration-200 hover:border-accent-light hover:text-accent"
                >
                  Sign In
                </a>
            </li>
            <li>
                <a
                  href="/account/register"
                  className="inline-flex h-12 items-center justify-center rounded-3xl border border-primary bg-transparent px-6 font-medium text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 sm:px-8 sm:py-3 md:block lg:text-base"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up 🡒
                </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="focus:shadow-outline -mr-1 rounded p-2 transition duration-200 focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 z-40 w-full">
                <div className="rounded border bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <img
                            className="w-8 cursor-pointer"
                            src={Logo}
                            alt="logo"
                          />
                          <span className="ml-2 font-Poppins text-xl font-bold text-logo">
                            triage
                          </span>
                        </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="-mt-2 -mr-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                          <a
                            href="#features"
                            aria-label="Features of the product"
                            title="Features of the product"
                            className="font-medium tracking-wide text-logo transition-colors duration-200 hover:text-accent"
                          >
                            Features
                          </a>
                      </li>
                      <li>
                          <a
                            href="#process"
                            aria-label="Process of how the product works"
                            title="Process of how the product works"
                            className="font-medium tracking-wide text-logo transition-colors duration-200 hover:text-accent"
                          >
                            Process
                          </a>
                      </li>
                      <li>
                          <a
                          href="#pricing"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-logo transition-colors duration-200 hover:text-accent"
                          >
                            Pricing
                          </a>
                      </li>
                      <li>
                          <a
                          href="/account"
                            aria-label="Sign in"
                            title="Sign in"
                            className="font-medium tracking-wide text-logo transition-colors duration-200 hover:text-accent"
                          >
                            Sign In
                          </a>
                      </li>
                      <li>
                          <a
                          href="/account/register"
                            className="inline-flex h-12 w-full items-center justify-center rounded bg-primary px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-accent focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign Up 🡒
                          </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
