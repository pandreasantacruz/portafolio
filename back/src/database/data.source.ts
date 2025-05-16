import { DataSource } from "typeorm";
import { HOST, PORT_PG, USERNAME, PASSWORD, DATABASE } from "../config/envs";
import { Contact } from "../entities/Contact";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [Contact],
});
