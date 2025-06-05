import React, { useState } from "react";
import CarouselAppointments from "./AppointmentsPictures";

const Appointments = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Datos del modal (puedes parametrizar o traer de props)
  const title = "CLINIC PROJECT";
  const content = <CarouselAppointments />;

  return (
    <>
      <div
        className="flex flex-col items-center justify-center max-w-sm p-4 mx-auto transition-transform duration-300 border rounded-lg shadow cursor-pointer border-[#EF3C62] hover:scale-110"
        onClick={() => setIsOpen(true)}
      >
        <h3 className="pb-2 font-sans font-bold text-center">CLINIC PROJECT</h3>
        <div className="flex items-center w-full h-40">
          <img
            src="https://res.cloudinary.com/dpo25wgdo/image/upload/v1749147997/Appoint1_zrbfuj.png"
            alt="imagenXtremeGym"
            className="object-cover w-full h-full pb-2 rounded"
          />
        </div>
        <p className="font-bebas">Full Stack Developer</p>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setIsOpen(false)} // cerrar al clicar fuera
        >
          <div
            className="relative w-11/12 max-w-4xl max-h-full p-6 overflow-auto bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()} // no cerrar si clic adentro
          >
            <button
              className="absolute text-2xl font-bold text-gray-700 top-4 right-4 hover:text-red-600"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar modal"
            >
              &times;
            </button>

            <h2 className="mb-4 text-3xl font-bold text-black">{title}</h2>
            <div>{content}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Appointments;
