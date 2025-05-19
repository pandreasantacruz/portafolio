import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./database/data.source";
import contactRoutes from "./routes/contact.routes";
import { PORT } from "./config/envs";
import server from "./server";

AppDataSource.initialize()
  .then(() => {
    console.log(" DB conectada");
    server.listen(PORT, () => {
      console.log(` Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Error al conectar DB:", err));
