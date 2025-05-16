import { Request, Response } from "express";
import { AppDataSource } from "../database/data.source";
import { Contact } from "../entities/Contact";

export const createContact = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  const contactRepo = AppDataSource.getRepository(Contact);

  const contact = contactRepo.create({ name, email, message });
  await contactRepo.save(contact);

  return res.status(201).json({ message: "Mensaje enviado correctamente" });
};
