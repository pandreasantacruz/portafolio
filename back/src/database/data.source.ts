import { DataSource } from "typeorm";
import { HOST, PORT_PG, USERNAME, PASSWORD, DATABASE } from "../config/envs";
import { Contact } from "../entities/Contact";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: HOST,
  port: Number(PORT_PG),
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  synchronize: true,
  entities: [Contact],
  logging: true,
  subscribers: [],
  migrations: [],
});
