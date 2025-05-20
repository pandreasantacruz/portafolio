import { Request, Response } from "express";
import { createContactService } from "../services/contact.service";

export const createContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, message } = req.body;
    await createContactService({ name, email, message });

    res.status(201).json({ message: "Mensaje enviado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar el mensaje" });
  }
};
