const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-5">
      <h1 className="font-Inter text-6xl font-bold text-primary ">404</h1>
      <h3 className="font-Inter text-3xl">Oops! Page not found</h3>
      <p className="font-Arimo">
        The page you&apos;re looking for doesn&apos;t exist!
      </p>
      <div className="flex gap-x-2">
          <a href="/" className="rounded-xl bg-primary px-4 py-2 font-Arimo text-lg font-bold text-white transition duration-300 ease-in-out hover:border-white hover:bg-accent	hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
            Go back
          </a>
      </div>
    </div>
  );
};
export default NotFound;
