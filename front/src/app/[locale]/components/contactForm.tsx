/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { contactService } from "../service/contact";
import { IContact } from "../type/interface";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Contact");

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
    <div className="px-4 pb-12 border-b-8 sm:px-8 lg:px-16">
      <h2 className="px-4 py-2 mt-8 font-sans text-2xl font-bold text-center bg-blueP sm:text-4xl md:text-4xl">
        {t("C")}
      </h2>
      <div className="flex flex-col items-center w-full py-6">
        <div className="flex items-center justify-center w-full max-w-md p-8 shadow-lg rounded-2xl">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="w-full space-y-4 border-redP">
                <div className="space-y-2">
                  <Field
                    type="text"
                    name="name"
                    placeholder={t("CN")}
                    className="w-full p-3 border-2 rounded-lg border-blueP focus:outline-none focus:ring-2 focus:ring-verde"
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
                    className="w-full p-3 border-2 rounded-lg border-blueP focus:outline-none focus:ring-2 focus:ring-verde"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />

                  <Field
                    as="textarea"
                    name="message"
                    placeholder={t("CM")}
                    className="w-full p-3 border-2 rounded-lg border-blueP focus:outline-none focus:ring-2 focus:ring-verde"
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
                  className={`w-full  px-6 font-bebas bg-blueP py-3 mt-4 transition rounded-md font-poppins bg-fondo text-foreground hover:bg-verde hover:scale-105 ring-2 ring-blueP ring-opacity-100 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? t("CSS") : t("CS")}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
