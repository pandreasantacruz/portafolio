import express from "express";
import router from "./routes/contact.routes";
import morgan from "morgan";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(morgan("dev")); //registrar (log) solicitudes HTTP que llegan al servidor, lo que es útil para depurar y monitorear aplicaciones web.
server.use(cors()); //Habilita a otras personas a que pida la info al servidor ()
server.use(router);
export default server;
