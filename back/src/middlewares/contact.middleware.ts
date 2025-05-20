import { Request, Response, NextFunction } from "express";

export const createContactValidator = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ message: "Todos los campos son requeridos" });
    return;
  }
  next();
};
