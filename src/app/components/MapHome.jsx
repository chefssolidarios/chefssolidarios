import React from "react";

function MapHome() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg
              viewBox="0 0 24 24"
              className="text-chefs-500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
            <p className="text-base text-gray-500 md:text-lg">
              Desde aquí, un grupo de voluntarios trabaja incansablemente para
              preparar y repartir comidas a los afectados por Dana. Nos hemos
              unido para ofrecer apoyo, esperanza y alimento a quienes más lo
              necesitan en estos momentos difíciles.
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
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapHome;
