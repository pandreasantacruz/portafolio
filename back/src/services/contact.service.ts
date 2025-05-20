import { AppDataSource } from "../database/data.source";
import { ContactDto } from "../dto/contactDto";
import { Contact } from "../entities/Contact";

export const createContactService = async (
  contactData: ContactDto
): Promise<void> => {
  try {
    const contactRepo = AppDataSource.getRepository(Contact);
    const { name, email, message } = contactData;
    const contact = contactRepo.create({ name, email, message });
    await contactRepo.save(contact);
  } catch (error) {
    console.log("Error al guardar contacto", error);
    throw new Error("No se pudo guardar contacto.");
  }
};
