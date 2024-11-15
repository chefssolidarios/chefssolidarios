"use client";

export const Header = () => {
  return (
    <div className=" w-full lg:max-w-screen-xl z-10">
      <div className="bg-gradient-to-tr from-chefs-800 to-chefs-400 rounded-3xl px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400"></div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative">The</span>
                </span>{" "}
                quick, brown fox jumps over a lazy dog
              </h2>
              <p className="text-base text-indigo-100 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div>
              <a
                href="/necesito-ayuda"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-2xl shadow-md bg-chefs-400 hover:bg-chefs-700 focus:shadow-outline focus:outline-none"
                aria-label="Necesito ayuda"
                title="Necesito ayuda"
              >
                Necesito ayuda
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
