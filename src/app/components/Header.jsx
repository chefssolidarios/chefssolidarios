"use client";

export const Header = () => {
  return (
    <div className=" w-full lg:max-w-screen-xl z-10">
      <div className=" bg-support-hands bg-cover bg-center rounded-3xl px-4 pt-20 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:pt-36 lg:pb-12">
        <div className=" sm:mx-auto  ">
          <div className="flex flex-col md:flex-row  sm:text-center sm:mb-0 items-end justify-between">
            <div className="max-w-3xl text-left">
              <h2 className=" mb-2 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-4xl md:mx-auto md:text-7xl lg:text-9xl">
                <span className="block -mb-2 lg:-mb-4">CHEFS</span>
                <span className="block ">SOLIDARIOS</span>
              </h2>
              <p className="text-base font-semibold text-white md:text-lg">
                Juntos, cocinamos y distribuimos alimentos calientes para los
                afectados por la DANA en Valencia y alrededores. Tu ayuda marca
                la diferencia.
              </p>
              {/* <img src="images/support-hands.webp" alt="" /> */}
            </div>
            {/* <div>
              <a
                href="/necesito-ayuda"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-2xl shadow-md bg-chefs-400 hover:bg-chefs-700 focus:shadow-outline focus:outline-none"
                aria-label="Necesito ayuda"
                title="Necesito ayuda"
              >
                Necesito ayuda
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
