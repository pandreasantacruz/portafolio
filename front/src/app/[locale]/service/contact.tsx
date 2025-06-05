"use server";
import axios from "axios";
import { IContact } from "../type/interface";

const axiosApiBack = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const contactService = async (contactData: IContact) => {
  try {
    const contact = await axiosApiBack.post("/contact", contactData);
    console.log("Respuesta completa del login:", contact);
    console.log("user en servicio", contact.data);

    return contact.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error de Axios:",
        error.response?.data.message || error.message
      );
      throw new Error(error.response?.data?.message || "Error desconocido");
    }
  }
};
