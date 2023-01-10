import { DataSource } from "typeorm";
import Book from "../entity/Book";
import Author from "../entity/Author";

import * as path from "path";

export default new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "../database.sqlite"),
  synchronize: true,
  entities: [Book, Author],
  logging: ["query", "error"],
});
