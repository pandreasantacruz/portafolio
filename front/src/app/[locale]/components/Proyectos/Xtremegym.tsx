import React, { useState } from "react";

const Xtremegym = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Datos del modal (puedes parametrizar o traer de props)
  const title = "Entrenamiento Integral en un Solo Lugar";
  const content = (
    <img
      src="https://res.cloudinary.com/dixcrmeue/image/upload/v1743870277/home1_vob5wv.png"
      alt="imagenhome1 grande"
      className="w-full h-auto rounded"
    />
  );

  return (
    <>
      {/* Contenedor clickable para abrir modal */}
      <div
        className="flex flex-col items-center justify-center max-w-sm p-4 mx-auto transition-transform duration-300 border rounded-lg shadow cursor-pointer border-verde hover:scale-110"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center w-full h-40">
          <img
            src="https://res.cloudinary.com/dixcrmeue/image/upload/v1743870277/home1_vob5wv.png"
            alt="imagenhome1"
            className="object-cover w-full h-full pb-2 rounded"
          />
        </div>
        <h3 className="pb-2 font-bold text-center">
          Entrenamiento Integral en un Solo Lugar
        </h3>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
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

            <h2 className="mb-4 text-3xl font-bold">{title}</h2>
            <div>{content}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Xtremegym;
