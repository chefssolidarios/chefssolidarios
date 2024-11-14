import React from "react";

function ButtonSet() {
  return (
    <>
      <div className=" w-full lg:max-w-screen-xl bg-violet-400">
        <div className=" py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <div className="grid grid-cols-3 gap-8">
            <a
              href="/necesito-ayuda"
              className="bg-green-300 h-16 px-10 py-20 transition duration-300 transform  rounded hover:scale-105 "
            >
              Necesito Ayuda
            </a>
            <a
              href="/particular"
              className="bg-green-300 h-16 px-10 py-20 transition duration-300 transform  rounded  hover:scale-105 "
            >
              Soy Particular
            </a>
            <a
              href="/empresa"
              className="bg-green-300 h-16 px-10 py-20 transition duration-300 transform  rounded hover:scale-105 "
            >
              Soy Empresa
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonSet;
