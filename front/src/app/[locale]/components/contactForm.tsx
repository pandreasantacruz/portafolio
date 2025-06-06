/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { contactService } from "../service/contact";
import { IContact } from "../type/interface";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .required("El nombre es obligatorio"),
  email: Yup.string()
    .email("El formato de correo no es válido")
    .required("El correo es obligatorio"),
  message: Yup.string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .required("El mensaje es obligatorio"),
});

const Contact = () => {
  const handleOnSubmit = async (
    contactData: IContact,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      await contactService(contactData);

      toast.success("Mensaje enviado con éxito");
    } catch (error: any) {
      console.error("Error al enviar mensaje", error.message);
      toast.error(error.message || "Error desconocido");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full py-6">
      <h2 className="mb-6 text-3xl font-bold text-center text-foreground">
        Contáctame
      </h2>

      <div className="flex items-center justify-center w-full max-w-md p-8 shadow-lg rounded-2xl">
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full space-y-4 border-[#E0004D]">
              <div className="space-y-2">
                <Field
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="w-full p-3 border-2 border-[#B3C3F3]   rounded-lg focus:outline-none focus:ring-2 focus:ring-verde"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />

                <Field
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="w-full p-3 rounded-lg border-2 border-[#B3C3F3]  focus:outline-none focus:ring-2 focus:ring-verde"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />

                <Field
                  as="textarea"
                  name="message"
                  placeholder="Escribe tu mensaje"
                  className="w-full p-3 rounded-lg  border-2 border-[#B3C3F3]  focus:outline-none focus:ring-2 focus:ring-verde"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold px-6 bg-[#B3C3F3] py-3 mt-4 transition rounded-md font-poppins bg-fondo text-foreground hover:bg-verde hover:scale-105 ring-2 ring-gray-300 ring-opacity-100 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
