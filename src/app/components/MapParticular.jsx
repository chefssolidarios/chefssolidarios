import React from "react";

function MapParticular() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg
              viewBox="0 0 24 24"
              className="text-chefs-500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none ">
              Nos encontramos
              <br className="hidden md:block" />
              en la{" "}
              <span className="inline-block text-chefs-500">
                Feria de Valencia
              </span>
            </h2>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 text-3xl">
              <ul className="space-y-3 text-chefs-500">
                <li className="flex font-bold">
                  <span className="mr-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-car"
                    >
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                      <circle cx="7" cy="17" r="2" />
                      <path d="M9 17h6" />
                      <circle cx="17" cy="17" r="2" />
                    </svg>
                  </span>
                  Por tu cuenta
                </li>
                <li className="flex font-bold">
                  <span className="mr-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bus-front"
                    >
                      <path d="M4 6 2 7" />
                      <path d="M10 6h4" />
                      <path d="m22 7-2-1" />
                      <rect width="16" height="16" x="4" y="3" rx="2" />
                      <path d="M4 11h16" />
                      <path d="M8 15h.01" />
                      <path d="M16 15h.01" />
                      <path d="M6 19v2" />
                      <path d="M18 21v-2" />
                    </svg>
                  </span>
                  Bus EMT 62
                </li>
                <li className="flex font-bold">
                  <span className="mr-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-train-front"
                    >
                      <path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
                      <path d="m9 15-1-1" />
                      <path d="m15 15 1-1" />
                      <path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
                      <path d="m8 19-2 3" />
                      <path d="m16 19 2 3" />
                    </svg>
                  </span>
                  Tranvía
                </li>
              </ul>
            </div>
            <p className="mt-6 text-base text-gray-500 md:text-lg">
              Encontrarás un camino señalizado con pegatinas de{" "}
              <span className="text-red-400 font-semibold">
                CHEFS SOLIDARIOS{" "}
              </span>{" "}
              desde la puerta principal de Feria Valencia (cerca del tranvía).
            </p>
          </div>
          <div>
            <a
              href="https://maps.app.goo.gl/vR6D9m5y6GHAHB7V8"
              target="_blank"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-chefs-400 hover:text-chefs-800"
            >
              Conoce cómo llegar
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center  rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d647.1675094796237!2d-0.4267465278417897!3d39.503997512816746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60456cf398be71%3A0xa41b3b9e8bdd5bc1!2sFira%20Val%C3%A8ncia!5e0!3m2!1sen!2sar!4v1731621548417!5m2!1sen!2sar"
            width="600"
            height="750"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapParticular;
