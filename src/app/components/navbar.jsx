"use client";
import { useState } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Chef Solidarios"
          title="Chef Solidarios"
          className="inline-flex items-center"
        >
          <span className=" text-xl font-extrabold leading-none text-center transform scale-90 tracking-wide text-gray-800 uppercase">
            Chefs <br /> Solidarios
          </span>
        </a>
        <ul className=" items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="https://www.gofundme.com/f/valencia-necesita-comer-ayudala"
              aria-label="Donar"
              title="Donar"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-chefs-400"
            >
              Donar
            </a>
          </li>
          <li className="relative">
            {/* Botón principal */}
            <button
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-chefs-400 focus:outline-none"
              aria-label="Quiero ayudar"
              title="Quiero ayudar"
            >
              Quiero ayudar
            </button>

            {/* Menú desplegable */}
            {isSubmenuOpen && (
              <ul className="z-50 absolute -left-10 top-8 w-40 mt-2 bg-white border border-gray-200 rounded shadow-lg">
                <li>
                  <a
                    href="/particular"
                    className="block px-4 py-2 text-gray-700 hover:bg-chefs-50 hover:text-chefs-400"
                  >
                    Soy particular
                  </a>
                </li>
                <li>
                  <a
                    href="/empresa"
                    className="block px-4 py-2 text-gray-700 hover:bg-chefs-50 hover:text-chefs-400"
                  >
                    Soy empresa
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a
              href="/necesito-ayuda"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-2xl shadow-md bg-chefs-400 hover:bg-chefs-700 focus:shadow-outline focus:outline-none"
              aria-label="Necesito ayuda"
              title="Necesito ayuda"
            >
              Necesito ayuda
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Abrir Menu"
            title="Abrir Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
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
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 z-[500] bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Chef Solidarios"
                      title="Chef Solidarios"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-chefs-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Chef Solidarios
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
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
                        href="https://www.gofundme.com/f/valencia-necesita-comer-ayudala"
                        aria-label="Donar"
                        title="Donar"
                        className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-chefs-400"
                      >
                        Donar
                      </a>
                    </li>
                    <li>
                      <span
                        href="/"
                        aria-label="Quiero Ayudar"
                        title="Quiero Ayudar"
                        className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-chefs-400"
                      >
                        Quiero ayudar
                      </span>
                      <ul className="gap-2 pt-2 flex flex-col">
                        <li>
                          <a
                            href="/particular"
                            className="pl-4  font-semibold tracking-wide text-gray-500 transition-colors duration-200 hover:text-chefs-400"
                          >
                            Soy particular
                          </a>
                        </li>
                        <li>
                          <a
                            href="/empresa"
                            className="pl-4 font-semibold tracking-wide text-gray-500 transition-colors duration-200 hover:text-chefs-400"
                          >
                            Soy empresa
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="/necesito-ayuda"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-chefs-400 hover:bg-chefs-700 focus:shadow-outline focus:outline-none"
                        aria-label="Necesito Ayuda"
                        title="Necesito Ayuda"
                      >
                        Necesito ayuda
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
  );
};
