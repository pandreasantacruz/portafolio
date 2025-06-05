import React, { useState } from "react";
import CarouselEcommerce from "./EcommercePictures";

const Ecommerce = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Datos del modal (puedes parametrizar o traer de props)
  const title = "E-TECH";
  const content = <CarouselEcommerce />;

  return (
    <>
      <div
        className="flex flex-col items-center justify-center max-w-sm p-4 mx-auto transition-transform duration-300 border rounded-lg shadow cursor-pointer border-[#EF3C62] hover:scale-110"
        onClick={() => setIsOpen(true)}
      >
        <h3 className="pb-2 font-sans font-bold text-center">E-TECH </h3>
        <div className="flex items-center w-full h-40">
          <img
            src="https://res.cloudinary.com/dpo25wgdo/image/upload/v1749145327/Etech2_kyd583.png"
            alt="imagenETech"
            className="object-cover w-full h-full pb-2 rounded"
          />
        </div>
        <p className="font-bebas">Front End Developer</p>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-11/12 max-w-4xl max-h-full p-6 overflow-auto bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
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
export default Ecommerce;
