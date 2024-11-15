import React from "react";

import CardComponent from "../components/Cards";

function Particular() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:py-20">
      <div className="grid gap-8 row-gap-5 md:grid-cols-2 bg-orange-300">
        <CardComponent
          title="Únete como Voluntario"
          description="Sé parte de nuestra comunidad solidaria apoyando en la cocina, reparto, marketing, gestión de stock y más."
          linkText="Quiero ser voluntario"
          linkUrl="/"
        />
        <CardComponent
          title="Sé un Chef Solidario"
          description="Usa tu talento culinario para preparar comidas para quienes más lo necesitan"
          linkText="Quiero ser un Chef Solidario"
          linkUrl="/"
        />
        <CardComponent
          title="Ayuda con el Reparto"
          description="¿Tienes vehículo? únete para entregar comidas calientes a las familias afectadas."
          linkText="Quiero ayudar con el reparto"
          linkUrl="/"
        />
        <CardComponent
          title="Apoya con Tu Donación"
          description="Con tu contribución, podremos seguir cocinando y entregando comidas a quienes más lo necesitan. ¡Cada donación cuenta!"
          linkText="Quiero hacer una donación"
          linkUrl="/"
        />
      </div>
    </div>
  );
}

export default Particular;
