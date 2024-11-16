import React from "react";

import CardComponent from "../components/Cards";
import TextSection from "../components/TextSection";
import MapParticular from "../components/MapParticular";
import DonationsSection from "../components/DonationsSection";

function Particular() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:py-20">
      <div className="grid gap-8 row-gap-5 md:grid-cols-2 ">
        <CardComponent
          title="Únete como Voluntario"
          description="Sé parte de nuestra comunidad solidaria apoyando en la cocina, reparto, marketing, gestión de stock y más."
          linkText="Quiero ser voluntario"
          linkUrl="https://docs.google.com/forms/d/e/1FAIpQLSc6SokDK1WtDHsTXDC2FUrQs-a-myKKNQuWUhzLbS9OZBoFiw/viewform"
          iconName="Volunteer"
          target="_blank"
        />
        <CardComponent
          title="Sé un Chef Solidario"
          description='Usa tu talento culinario para preparar comidas para quienes más lo necesitan. Contáctanos en chefssolidarios.voluntarios@gmail.com con el asunto "CHEF".'
          linkText="Quiero ser un Chef Solidario"
          linkUrl="mailto:chefssolidarios.voluntarios@gmail.com?Subject=CHEF"
          iconName="Chefs"
        />
        <CardComponent
          title="Ayuda con el Reparto"
          description="¿Tienes vehículo? únete para entregar comidas calientes a las familias afectadas."
          linkText="Quiero ayudar con el reparto"
          linkUrl="https://docs.google.com/forms/d/e/1FAIpQLSc6SokDK1WtDHsTXDC2FUrQs-a-myKKNQuWUhzLbS9OZBoFiw/viewform"
          iconName="Truck"
          target="_blank"
        />
        <CardComponent
          title="Apoya con Tu Donación"
          description="Con tu contribución, podremos seguir cocinando y entregando comidas a quienes más lo necesitan. ¡Cada donación cuenta!"
          linkText="Quiero hacer una donación"
          linkUrl="#donation"
          iconName="Donations"
        />
      </div>

      <TextSection
        title="Galeria Feria Valencia"
        imageSrc="./images/galeria-feria-valencia.webp"
        position="right"
      >
        <p className="text-base text-gray-500 md:text-lg mb-4">
          Tenemos dos turnos de voluntariado:
        </p>
        <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 text-3xl">
          <ul className="space-y-3 text-chefs-500">
            <li className="flex font-bold">
              <span className="mr-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock-3"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16.5 12" />
                </svg>
              </span>
              09:30 - 13:30
            </li>
            <li className="flex font-bold">
              <span className="mr-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock-3"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16.5 12" />
                </svg>
              </span>
              13:30 - 19:00
            </li>
          </ul>
        </div>
        <div className="max-w-xl mt-6">
          <p className="text-base text-gray-500 md:text-lg">
            Necesitamos{" "}
            <span className="text-red-400 font-semibold">
              muchos voluntarios
            </span>{" "}
            por cada turno.
            <br />
            Únete completando el formulario haciendo clic en el botón de abajo.
          </p>
        </div>
      </TextSection>

      <MapParticular />

      <DonationsSection />
    </div>
  );
}

export default Particular;
