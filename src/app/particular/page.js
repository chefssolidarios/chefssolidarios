import React from "react";

import CardComponent from "../components/Cards";

function Particular() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:py-20">
      <div className="grid gap-8 row-gap-5 md:grid-cols-2 bg-orange-300">
        <CardComponent
          title="Voluntario"
          description="Quiero ser voluntario y ser parte del equipo"
          linkText="Unirme como voluntario"
          linkUrl="/"
        />
        <CardComponent
          title="Chefs"
          description="Quiero ser voluntario y ser parte del equipo"
          linkText="Unirme como voluntario"
          linkUrl="/"
        />
        <CardComponent
          title="Reparto"
          description="'¿Tienes vehículo y quieres ayudarnos a entregar la comida calentita?"
          linkText="Unirme como voluntario"
          linkUrl="/"
        />
        <CardComponent
          title="Relleno"
          description="Aca tiene que ir algo de relleno"
          linkText="Unirme como voluntario"
          linkUrl="/"
        />
      </div>
    </div>
  );
}

export default Particular;
