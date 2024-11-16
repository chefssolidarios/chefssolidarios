"use client";

export const HeaderBusiness = () => {
  return (
    <div className="w-full lg:max-w-screen-xl z-10">
      <div className="relative bg-delivery-man bg-cover bg-center rounded-3xl px-4 pt-20 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:pt-36 lg:pb-12">
        {/* Degradado en la parte inferior */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black md:opacity-70 lg:opacity-60 rounded-3xl"></div>

        {/* Contenido */}
        <div className="relative sm:mx-auto">
          <div className="flex flex-col lg:flex-row  sm:mb-0 lg:items-end lg:justify-between">
            <div className="max-w-3xl text-left">
              <h2 className="mb-2 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-4xl md:mx-auto md:text-7xl lg:text-9xl uppercase">
                <span className="block -mb-2 lg:-mb-4">Empresas</span>
                <span className="block">Solidarias</span>
              </h2>
              <p className="text-base font-semibold text-white md:text-lg ">
                ¿Tu empresa puede <strong>echarnos una mano</strong>? <br />
                Escríbenos a{" "}
                <a
                  href="mailto:chefsolidarios.donar@gmail.com?subject=EMPRESAS"
                  className="underline hover:text-chefs-300"
                >
                  <strong>chefsolidarios.donar@gmail.com</strong>
                </a>{" "}
                con el asunto <strong>EMPRESAS</strong>, y te guiaremos para{" "}
                <strong>colaborar</strong>.
              </p>
            </div>
            <div>
              <a
                href="mailto:chefsolidarios.donar@gmail.com?subject=EMPRESAS"
                className="inline-flex lg:items-center mt-6 justify-center px-6 font-medium tracking-wide text-white transition duration-200  shadow-md bg-chefs-800 hover:bg-chefs-500 focus:shadow-outline focus:outline-none text-base font-semibold rounded-2xl lg:rounded-3xl md:text-xl py-4 lg:text-3xl lg:py-7"
                aria-label="Contactar ahora"
                title="Contactar ahora"
              >
                Contactar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
