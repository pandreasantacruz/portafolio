import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./database/data.source";
import contactRoutes from "./routes/contact.routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 3001;

AppDataSource.initialize()
  .then(() => {
    console.log("📦 DB conectada");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Error al conectar DB:", err));
