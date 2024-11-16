import React from "react";
import { HeaderBusiness } from "../components/Header-business";
import CardComponent from "../components/Cards";

function Empresa() {
  return (
    <div>
      <HeaderBusiness />
      <div className="grid :grid-cols-1 mt-8 mb-16 px-10">
        <CardComponent
          title="Ayuda con el Reparto"
          description="¿Tienes vehículo? únete para entregar comidas calientes a las familias afectadas."
          linkText="Quiero ayudar con el reparto"
          linkUrl="https://docs.google.com/forms/d/e/1FAIpQLSc6SokDK1WtDHsTXDC2FUrQs-a-myKKNQuWUhzLbS9OZBoFiw/viewform"
          iconName="Truck"
        />
      </div>
    </div>
  );
}

export default Empresa;
