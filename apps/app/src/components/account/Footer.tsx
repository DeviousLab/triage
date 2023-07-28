const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center  sm:justify-start">
            <p className="mt-4 text-center font-Arimo text-sm text-logo lg:mt-0 lg:text-right">
              &copy; 2022 triage. All rights reserved.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap justify-center text-center font-Arimo text-sm text-logo lg:mt-0 lg:text-right">
            <p>Privacy Policy</p>
            <p className="ml-4 border-l-2 border-gray-200 pl-4">
              Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
