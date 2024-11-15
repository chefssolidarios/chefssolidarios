// import React from "react";

// function TextSection() {
//   return (
//     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
//         <div className="flex flex-col justify-center">
//           <div className="max-w-xl mb-6">
//             <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-chefs-500 sm:text-5xl sm:leading-none">
//               ¿A qué hora?
//             </h2>
//             <p className="text-base text-gray-500 md:text-lg">
//               Tenemos dos turnos de voluntariado:
//             </p>
//           </div>
//           <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 text-3xl">
//             <ul className="space-y-3 text-chefs-500">
//               <li className="flex  font-bold">
//                 <span className="mr-2 flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     class="lucide lucide-clock-3"
//                   >
//                     <circle cx="12" cy="12" r="10" />
//                     <polyline points="12 6 12 12 16.5 12" />
//                   </svg>
//                 </span>
//                 09:30 - 13:30
//               </li>
//               <li className="flex  font-bold">
//                 <span className="mr-2  flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     class="lucide lucide-clock-3"
//                   >
//                     <circle cx="12" cy="12" r="10" />
//                     <polyline points="12 6 12 12 16.5 12" />
//                   </svg>
//                 </span>
//                 13:30 - 19:00
//               </li>
//             </ul>
//           </div>
//           <div className="max-w-xl mt-6">
//             <p className="text-base text-gray-500 md:text-lg">
//               Necesitamos{" "}
//               <span className="text-red-400">muchos voluntarios</span> por cada
//               turno.
//               <br />
//               Únete completando el formulario haciendo clic en el botón de
//               abajo.
//             </p>
//           </div>
//         </div>
//         <div>
//           <img
//             className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
//             src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TextSection;

import React from "react";

const TextSection = ({ title, children, imageSrc, position = "left" }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0  lg:py-20">
      <div className="grid gap-10 row-gap-10 lg:grid-cols-2">
        {/* Imagen a la izquierda */}
        <div className={`flex ${position === "right" ? "hidden" : "block"}`}>
          <img
            className="object-cover w-full h-56 rounded-2xl shadow-lg sm:h-96"
            src={imageSrc}
            alt={title}
          />
        </div>

        {/* Sección de Texto */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="280"
              height="280"
              viewBox="0 0 24 24"
              fill="none"
              className="text-chefs-500"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-alarm-clock-check"
            >
              <circle cx="12" cy="13" r="8" />
              <path d="M5 3 2 6" />
              <path d="m22 6-3-3" />
              <path d="M6.38 18.7 4 21" />
              <path d="M17.64 18.67 20 21" />
              <path d="m9 13 2 2 4-4" />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none ">
              {title}
            </h2>
            {children}
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className={`flex ${position === "left" ? "hidden" : "block"}`}>
          <img
            className="object-cover w-full h-56 rounded-2xl shadow-lg sm:h-96"
            src={imageSrc}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default TextSection;
