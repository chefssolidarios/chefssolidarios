"use client";

export const Header = () => {
  return (
    <div className=" w-full lg:max-w-screen-xl z-10">
      <div className="bg-gradient-to-tr from-chefs-800 to-chefs-400 rounded-3xl px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-28 lg:pb-12">
        <div className=" sm:mx-auto  bg-orange-300">
          <div className="flex flex-col md:flex-row mb-16 sm:text-center sm:mb-0 items-end justify-between">
            <div className=" bg-green-400 max-w-3xl text-left">
              <h2 className=" mb-2 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:mx-auto md:text-9xl ">
                CHEFS <br /> SOLIDARIOS
              </h2>
              <p className="text-base text-indigo-100 md:text-lg">
                Juntos, cocinamos y distribuimos alimentos calientes para los
                afectados por la DANA en Valencia y alrededores. Tu ayuda marca
                la diferencia.
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
