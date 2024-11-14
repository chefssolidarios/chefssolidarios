import React from "react";

function ButtonSet() {
  return (
    <>
      <div className=" w-full lg:max-w-screen-xl bg-violet-400/10">
        <div className=" py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <div className="grid grid-cols-3 gap-8">
            <a
              href="/necesito-ayuda"
              className="bg-green-300 flex justify-between items-center  px-10 py-16 text-text transition duration-300 transform  rounded-2xl hover:scale-105 uppercase"
            >
              <span className="font-semibold text-3xl leading-none">
                NECESITO <br />
                ayuda
              </span>
              <div className="h-20 w-20 bg-fuchsia-500"></div>
            </a>
            <a
              href="/particular"
              className="bg-green-300 flex justify-between items-center  px-10 py-16 text-text transition duration-300 transform  rounded-2xl   hover:scale-105 uppercase "
            >
              <span className="font-semibold text-3xl leading-none">
                soy <br />
                Particular
              </span>
              <div className="h-20 w-20 bg-fuchsia-500"></div>
            </a>
            <a
              href="/empresa"
              className="bg-green-300 flex justify-between items-center  px-10 py-16 text-text transition duration-300 transform  rounded-2xl  hover:scale-105 uppercase"
            >
              <span className="font-semibold text-3xl leading-none">
                soy <br />
                empresa
              </span>
              <div className="h-20 w-20 bg-fuchsia-500"></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonSet;
