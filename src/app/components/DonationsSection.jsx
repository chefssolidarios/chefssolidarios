import React from "react";

const DonationsSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-3xl sm:text-center sm:mx-auto">
        <div className="inline-block mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              className="text-chefs-400"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-package-open"
            >
              <path d="M12 22v-9" />
              <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" />
              <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" />
              <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" />
            </svg>
          </div>
        </div>
        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Donaciones
        </h2>
        <p className="text-base text-gray-700 md:text-lg text-pretty">
          ¿Quieres aportar tu granito de arena? Puedes ayudarnos con una
          donación a través de nuestro <strong>crowdfunding</strong> o enviando
          productos. Si prefieres <strong>donar productos</strong>, envía un
          correo a{" "}
          <a
            href="mailto:chefssolidarios.donar@gmail.com"
            className="text-chefs-400"
          >
            chefssolidarios.donar@gmail.com
          </a>{" "}
          explicando tu aportación.
        </p>
        <hr className="my-8 border-gray-300" />
        <div className="flex items-center mb-3 gap-4 sm:justify-center">
          <a
            href="https://www.gofundme.com/f/valencia-necesita-comer-ayudala"
            className="inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white transition duration-200 rounded-2xl shadow-md bg-chefs-400 hover:bg-chefs-700 focus:shadow-outline focus:outline-none"
            aria-label="Necesito ayuda"
            title="Necesito ayuda"
          >
            Donar en Crowfunding
          </a>
          <a
            href="mailto:chefssolidarios.donar@gmail.com"
            className="inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white transition duration-200 rounded-2xl shadow-md bg-chefs-400 hover:bg-chefs-700 focus:shadow-outline focus:outline-none"
            aria-label="Necesito ayuda"
            title="Necesito ayuda"
          >
            Donar productos
          </a>
        </div>
        {/* <p className="max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto">
          Sed ut unde omnis iste natus accusantium doloremque laudantium omnis
          iste.
        </p> */}
      </div>
    </div>
  );
};

export default DonationsSection;
