import React from "react";

function ButtonSet() {
  return (
    <>
      <div className=" w-full lg:max-w-screen-xl ">
        <div className=" py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="relative overflow-hidden bg-chefs-600/70 border-2 border-chefs-400 hover:bg-chefs-500 rounded-2xl transition duration-300 transform  hover:scale-105">
              <a
                href="/necesito-ayuda"
                className="  z-30 relative   flex justify-between items-center px-10 py-16 text-white  uppercase "
              >
                <span className="font-semibold text-3xl leading-none">
                  NECESITO <br />
                  ayuda
                </span>
                <div className="h-20 w-20 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-handshake"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                </div>
              </a>
            </div>

            <div className="relative overflow-hidden bg-chefs-800 hover:bg-chefs-500 rounded-2xl transition duration-300 transform  hover:scale-105">
              {/* Tarjeta con contenido */}
              <a
                href="/particular"
                className="z-30 relative flex justify-between items-center px-10 py-16 text-white uppercase "
              >
                <span className="font-semibold text-3xl leading-none">
                  <span className="text-xl text-chefs-200 ">quiero ayudar</span>
                  <br />
                  soy <br />
                  Particular
                </span>
                <div className="h-20 w-20 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-package"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                    <path d="M12 22V12" />
                    <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" />
                    <path d="m7.5 4.27 9 5.15" />
                  </svg>
                </div>
              </a>
            </div>

            <div className="relative overflow-hidden bg-chefs-800 hover:bg-chefs-500 rounded-2xl transition duration-300 transform  hover:scale-105">
              <a
                href="/empresa"
                className="  z-30 relative   flex justify-between items-center px-10 py-16 text-white  uppercase "
              >
                <span className="font-semibold text-3xl leading-none">
                  <span className="text-xl text-chefs-200 ">quiero ayudar</span>
                  <br />
                  soy <br />
                  empresa
                </span>
                <div className="h-20 w-20 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-boxes"
                  >
                    <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
                    <path d="m7 16.5-4.74-2.85" />
                    <path d="m7 16.5 5-3" />
                    <path d="M7 16.5v5.17" />
                    <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
                    <path d="m17 16.5-5-3" />
                    <path d="m17 16.5 4.74-2.85" />
                    <path d="M17 16.5v5.17" />
                    <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
                    <path d="M12 8 7.26 5.15" />
                    <path d="m12 8 4.74-2.85" />
                    <path d="M12 13.5V8" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonSet;
