import { Router } from "express";
import { createContact } from "../controllers/contact.controller";
import { createContactValidator } from "../middlewares/contact.middleware";

const router: Router = Router();
router.post("/contact", createContactValidator, createContact);

export default router;
