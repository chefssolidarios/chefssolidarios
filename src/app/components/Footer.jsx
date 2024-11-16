import React from "react";

function Footer() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-black text-white mb-10 rounded-3xl">
      <div className="flex  items-center flex-col md:flex-row gap-16 justify-between  mb-8  ">
        <div className="flex flex-col items-center md:items-start md:max-w-md lg:col-span-2">
          <div className="text-center w-fit">
            <span className=" text-xl font-extrabold leading-none text-center transform scale-90 tracking-wide text-white uppercase">
              Chefs <br /> Solidarios
            </span>
          </div>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-base ">Chefs Solidarios en Acción🍲 </p>
          </div>
        </div>
        <div className=" md:mr-10 flex flex-col  md:flex-row gap-16 ">
          <div>
            <p className="font-semibold tracking-wide ">Quiero ayudar</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://www.gofundme.com/f/valencia-necesita-comer-ayudala"
                  className=" transition-colors duration-300 hover:text-chefs-400"
                >
                  Donar
                </a>
              </li>
              <li>
                <a
                  href="/particular"
                  className=" transition-colors duration-300 hover:text-chefs-400"
                >
                  Quiero ser Voluntario
                </a>
              </li>
              <li>
                <a
                  href="/empresa"
                  className=" transition-colors duration-300 hover:text-chefs-400"
                >
                  Soy empresa
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide ">Necesito ayuda</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/necesito-ayuda"
                  className=" transition-colors duration-300 hover:text-chefs-400"
                >
                  Solicitar ayuda
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row justify-between items-center pt-8 pb-12 border-t sm:flex-row">
        <span className="leading-tight text-sm">
          Made with love by Lukecolman
        </span>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/solidarios.chefs/"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-2xl shadow-md border-2 hover:border-chefs-500 hover:bg-chefs-700 focus:shadow-outline focus:outline-none gap-2"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
