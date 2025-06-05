import "dotenv/config"; // Esto debe ir primero
import "reflect-metadata";
import { AppDataSource } from "./database/data.source";
import { PORT } from "./config/envs";
import server from "./server";
import contactRoutes from "./routes/contact.routes";

AppDataSource.initialize()
  .then(() => {
    console.log(" DB conectada");
    server.listen(PORT,'0.0.0.0', () => {
      console.log(` Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error(" Error al conectar DB:", err));
