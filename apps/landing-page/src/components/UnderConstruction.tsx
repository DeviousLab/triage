import { useState } from 'react';
import { IoCloseOutline, IoConstruct } from 'react-icons/io5';

const UnderConstruction = () => {
  const [showUnderConstruction, setShowUnderConstruction] = useState(true);
  return (
    <div className={showUnderConstruction ? 'bg-primary' : 'hidden'}>
      <div className="mx-auto max-w-7xl p-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-secondary p-2">
              <IoConstruct className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">Under construction!</span>
              <span className="hidden md:inline">
                This website is currently under construction. Stay tuned!
              </span>
            </p>
          </div>
          <div className="order-2 shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex rounded-md p-2 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={() => setShowUnderConstruction(false)}
            >
              <span className="sr-only">Dismiss</span>
              <IoCloseOutline
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
